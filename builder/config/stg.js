import { merge } from 'lodash';
import { resolve } from 'path';

import baseConfig from './base';

const envConfig = {
  mode: 'development',
  resolve: {
    alias: {
      // 设置配置模块，引用当前环境指定的配置
      config$: resolve(__dirname, `../../src/config/stg.js`)
    }
  },
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 9000
  }
};

export default merge(baseConfig, envConfig);
