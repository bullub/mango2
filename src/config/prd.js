import config from './base';
import { merge } from 'lodash-es';

const envConfig = {
  a: 123,
  b: 234
};

export default merge(config, envConfig);