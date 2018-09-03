import { merge } from 'lodash';
import { resolve } from 'path';

import baseConfig from './base';

import zipPackUtils from '../utils/zip-pack-utils';
import { isWatchMode } from "../utils/environment";

const watchMode = isWatchMode();
// 给当前配置增加打包zip的部分
zipPackUtils(baseConfig);

const packageJSON = require('../../package.json');

// 其它资源转换配置
baseConfig.module.rules.push({
  test: /\.(png|jpg|gif|ttf|woff|eot|svg)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 5120,
      emitFile: true,
      name: `[path][name].${watchMode ? '' : '.[hash:4]'}.[ext]`,
      publicPath: `//img.ydp.com/${packageJSON.name}/`,
      // outputPath: ''
    }
  }]
});

const envConfig = {
  output: {
    publicPath: '//script.ydp.com/message-center/'
  },
  resolve: {
    alias: {
      // 设置配置模块，引用当前环境指定的配置
      config$: resolve(__dirname, `../../src/config/prd.js`)
    }
  }
};

export default merge(baseConfig, envConfig);
