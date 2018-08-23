import config from 'config';
import test from '../../assets/css/test';


function consoleLog() {
  console.log(config, test);
}

consoleLog();


export default {
  consoleLog
}
