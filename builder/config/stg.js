import { merge } from 'lodash';
import { resolve } from 'path';

import baseConfig from './base';

import zipPackUtils from '../utils/zip-pack-utils'
import { isWatchMode, isDevServeMode } from "../utils/environment";

import packageJSON from '../../package.json';

const watchMode = isWatchMode();
// 给当前配置增加打包zip的部分
zipPackUtils(baseConfig);

let publicPath = `//stg.ydp.com/${packageJSON.name}/`;

// 如果是开发服务启动模式的话
if (isDevServeMode()) {
  publicPath = `//127.0.0.1:8080/${packageJSON.name}/`;
}

// 其它资源转换配置
baseConfig.module.rules.push({
  test: /\.(png|jpg|gif|ttf|woff|eot|svg)$/,
  use: [{
    loader: 'url-loader',
    options: {
      limit: 5120,
      emitFile: true,
      name: `[path][name]${watchMode ? '' : '.[hash:4]'}.[ext]`,
      publicPath
      // outputPath: ''
    }
  }]
});

const envConfig = {
  output: {
    publicPath
  },
  resolve: {
    alias: {
      // 设置配置模块，引用当前环境指定的配置
      config$: resolve(__dirname, `../../src/config/stg.js`)
    }
  }
};

export default merge(baseConfig, envConfig);
