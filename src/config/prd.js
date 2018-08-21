import config from './base';
import { merge } from 'lodash'

const baseConfig = merge({}, config);

const envConfig = {
  a: 123,
  b: 234
};

export default merge(baseConfig, envConfig);