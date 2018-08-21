import _ from 'lodash';

import baseConfig from './base';

const envConfig = {
  mode: 'production',
  resolve: {
    // 设置配置模块，引用当前环境指定的配置
    config$: resolve(__dirname, `../../src/config/prd.js`)
  }
};

export default _.merge(baseConfig, envConfig);
