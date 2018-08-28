import config from 'config';
require('../../assets/css/test');


function consoleLog() {
  console.log(config);
}

consoleLog();

class A {
  a;
  b;
  constructor() {

  }
}

window.A = A;
export default {
  consoleLog,
  A
}
