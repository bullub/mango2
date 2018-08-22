import { getAccessEnvironment } from './builder/utils/environment';

const accessEnvironment = getAccessEnvironment();

const envConfig = require(`./builder/config/${accessEnvironment}`);

// console.log(JSON.stringify(envConfig, null, '  '));

export default envConfig;