import _ from 'lodash';

import baseConfig from './base';

const envConfig = {
  mode: 'development',

};

export default _.merge(baseConfig, envConfig);
