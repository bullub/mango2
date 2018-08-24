import {
  resolve
} from 'path';

import CleanWebpackPlugin from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import webpack from 'webpack';

import {
  findEntries
} from '../utils/entry-finder';

const {
  entries,
  htmlWebpackPlugins
} = findEntries();

export default {
  context: resolve('src'),
  entry: entries,
  output: {
    path: resolve('dist'),
    filename: 'scripts/[name].[contenthash:8].js',
    // public path会影响打包时一些插件生成的引用路径的拼接方式，不配默认使用相对路径
    // publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.css', '.tpl'],
    alias: {
      // 页面开始的地方
      pages: resolve('src/pages'),
      // 页面引用的脚本入口
      scripts: resolve('src/scripts'),
      // 公共资源的位置
      // assets: resolve('src/assets')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      sideEffects: true,
      use: [{
        loader: 'babel-loader'
      }]
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
            publicPath: 'assets/css'
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
    {
      test: /\.html$/,
      use: [
        'extract-loader',
        {
          loader: 'html-loader',
          options: {
            root: resolve('src'),
            attrs: ['img:src', 'link:href'],
            interpolate: true
          }
        }
      ]
    },
    {
      test: /\.tpl$/,
      use: [
        'raw-loader'
      ]
    }
    ]
  },
  optimization: {
    // runtimeChunk: 'single',
    // 无论 mode 值是什么始终保持文件名
    // occurrenceOrder: true,
    // 代码拆分,目前HtmlWebpackPlugin不支持，暂不开启
     splitChunks: {
       maxSize: 20480,
       cacheGroups: {
         default: false,
         commons: {
           name: 'commons',
           chunks: 'all',
           minChunks: 2
         }
       }
     }
  },
  plugins: [
    new CleanWebpackPlugin('dist/**', {
      root: resolve('.'),
      verbose: true,
      dry: false
    }),
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        hot: true // optional as the plugin cannot automatically detect if you are using HOT, not for production use
      }
    ),
  ]
};