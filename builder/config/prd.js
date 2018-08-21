import _ from 'lodash';

import baseConfig from './base';

const envConfig = {
  mode: 'production'
};

export default _.merge(baseConfig, envConfig);
