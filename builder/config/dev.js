import {
  merge
} from 'lodash';
import {
  resolve
} from 'path';

import baseConfig from './base';
import zipPackUtils from '../utils/zip-pack-utils'
import {
  isWatchMode,
  isDevServeMode
} from "../utils/environment";

import packageJSON from '../../package.json';

const watchMode = isWatchMode();

let publicPath = `//127.0.0.1:8080/dist/`;


if (isDevServeMode()) {
  publicPath = `//127.0.0.1:8080/${packageJSON.name}/`;
}


// 给当前配置增加打包zip的部分
zipPackUtils(baseConfig);

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
  // output 配置文档 https://webpack.js.org/configuration/output/
  output: {
    publicPath
  },
  // https://webpack.js.org/configuration/resolve/
  resolve: {
    alias: {
      // 设置配置模块，引用当前环境指定的配置
      config$: resolve(__dirname, `../../src/config/dev.js`)
    }
  }
};

export default merge(baseConfig, envConfig);