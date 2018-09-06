import config from 'config';
import { A } from './A';

require('../../assets/css/test.css');



function consoleLog() {
  console.log(config);
}

consoleLog();

window.A = A;
export default {
  consoleLog,
  A
}
