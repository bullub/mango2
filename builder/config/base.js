import {
  resolve
} from 'path';

import CleanWebpackPlugin from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import addOptimization from '../utils/optimization-utils';

import webpack from 'webpack';

import {
  isWatchMode
} from "../utils/environment";

import {
  findEntries
} from '../utils/entry-finder';

import packageJSON from '../../package.json';

const {
  entries,
  htmlWebpackPlugins
} = findEntries();

const watchMode = isWatchMode();

const webpackConfig = {
  mode: watchMode ? 'development' : 'production',
  context: resolve('src'),
  entry: entries,
  output: {
    path: resolve('dist'),
    filename: `./scripts/[name]${watchMode ? '' : '.[chunkhash:4]'}.js`,
    // public path会影响打包时一些插件生成的引用路径的拼接方式，不配默认使用相对路径
    // publicPath: './'
  },
  devServer: {
    contentBase: resolve('.'),
    host: '127.0.0.1',
    port: '8080',
    hot: true,
    publicPath: `/${packageJSON.name}/`,
    openPage: `${packageJSON.name}/pages/index.html`,
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000,
      ignored: /node_modules/
    },
    // 设置mock-data目录的数据代理
    proxy: {
      '/api': {
        target: 'http://localhost:8080/mock-data',
        pathRewrite: {
          // 将路径中开头的/api去掉，并且检查扩展名是否是.json，如果不是则添加扩展名 json
          '.+': (path) => {
            let replacedPath = path.replace('/api', '');

            if (replacedPath.endsWith('.json')) {
              return replacedPath;
            }

            return replacedPath + '.json';
          }
        }
      }
    }
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.css', '.tpl'],
    alias: {
      src: resolve('src'),
      // 页面开始的地方
      pages: resolve('src/pages'),
      // 页面引用的脚本入口
      scripts: resolve('src/scripts'),
      // 公共资源的位置
      // assets: resolve('src/assets')
    }
  },
  module: {
    // js打包配置
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        sideEffects: true,
        use: [{
          loader: 'babel-loader'
        }]
      },
      // css打包配置
      {
        test: /\.css$/,
        use: [
          watchMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: './'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              getLocalIdent: (context, localIdentName, localName, options) => {
                return localName;
              }
            }
          },
          'postcss-loader'
        ]
      },
      // html转换配置
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            attrs: ['link:href', 'img:src'],
            interpolate: true
          }
        }]
      },
      // 模板转换配置
      {
        test: /\.(tpl|ejs)$/,
        use: [
          'raw-loader',
          'extract-loader',
          {
            loader: 'html-loader',
            options: {
              attrs: ['link:href', 'img:src'],
              interpolate: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // 打包目标目录清理插件
    new CleanWebpackPlugin('dist/**', {
      root: resolve('.'),
      verbose: true,
      dry: false
    }),
    // 所有入口html的插件
    ...htmlWebpackPlugins,
    // 样式抽取插件配置
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `/assets/css/[name]${watchMode ? '' : '.[chunkhash:4]'}.css`,
      chunkFilename: `/assets/css/[id]${watchMode ? '' : '.[chunkhash:4]'}.css`,
      hot: true // optional as the plugin cannot automatically detect if you are using HOT, not for production use
    })
  ]
};
// 增加优化打包部分，包括： 代码拆分，js压缩,css压缩，图片压缩部分(watch环境下不会增加该配置，函数内部有检测)
addOptimization(webpackConfig);

// HMR只在开发阶段使用
if (watchMode) {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin({}));
}

export default webpackConfig;