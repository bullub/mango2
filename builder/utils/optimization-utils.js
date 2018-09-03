import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';

import { isWatchMode } from './environment';

export default addOptimization;

/**
 * 增加优化配置，该配置仅在非watch模式下生效，包括图片压缩、css压缩合并、js压缩合并和拆分
 * @param {Object} webpackConfig webpack基础配置信息
 * @returns {Object} 添加了优化选项的webpack配置
 */
function addOptimization(webpackConfig) {

  if (isWatchMode()) {
    return webpackConfig;
  }

  webpackConfig.optimization = {
    // 启动压缩
    minimize: true,
    // 合并重复的代码块
    mergeDuplicateChunks: true,
    // 移除父模块中已经存在的模块
    removeAvailableModules: true,
    // runtimeChunk: 'single',
    // 无论 mode 值是什么始终保持文件名
    // occurrenceOrder: true,
    // 代码拆分,目前HtmlWebpackPlugin不支持，暂不开启
    minimizer: [
      // 优化js压缩
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        cache: true,
      }),
      // CSS资源优化
      new OptimizeCSSAssetsPlugin({})
    ],
    // 代码块拆分
    splitChunks: {
      // 每个块的最大大小是60K
      maxSize: 61440,
      // 每个块的最小大小是40K
      minSize: 40960,
      cacheGroups: {
        default: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  };

  // 压缩图片
  webpackConfig.plugins.push(new ImageminPlugin({
    jpegtran: {
      progressive: true
    }
  }));

  return webpackConfig;
}