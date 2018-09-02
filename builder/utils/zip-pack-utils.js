import FileManagerPlugin from 'filemanager-webpack-plugin';

import moment from 'moment';

import {
  getAccessEnvironment,
  isWatchMode
} from './environment';

const packageJSON = require('../../package.json');


export default appendZipPackConfig;

function appendZipPackConfig(webpackConfig) {

  if(isWatchMode()) {
    return webpackConfig;
  }

  webpackConfig.plugins.push(new FileManagerPlugin({
    onEnd: {
      mkdir: ['./packages'],
      archive: [{
        source: './dist',
        destination: `./packages/${packageJSON.name}.${getAccessEnvironment()}.${moment().format('YY-MM-DD_hh:mm:ss')}.zip`
      }, {
        source: './dist',
        destination: `./packages/${packageJSON.name}.latest.zip`
      }]
    }
  }));

  return webpackConfig;
}