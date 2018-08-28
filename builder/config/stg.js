import { merge } from 'lodash';
import { resolve } from 'path';

import baseConfig from './base';

const envConfig = {
  mode: 'production',
  resolve: {
    alias: {
      // 设置配置模块，引用当前环境指定的配置
      config$: resolve(__dirname, `../../src/config/stg.js`)
    }
  }
};

export default merge(baseConfig, envConfig);
