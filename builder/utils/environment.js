const commandArgs = process.argv;

// 预定义当前访问环境为空值
let currentAccessEnvironment = null;

export const ACCESS_ENV_DEV = 'dev';
export const ACCESS_ENV_STG = 'stg';
export const ACCESS_ENV_UAT = 'uat';
export const ACCESS_ENV_PRD = 'prd';

export const ACCESS_ENVIRONMENTS = [ACCESS_ENV_DEV, ACCESS_ENV_STG, ACCESS_ENV_UAT, ACCESS_ENV_PRD];

/**
 * 获取访问环境
 * @returns {String} 当前的访问环境
 */
export function getAccessEnvironment() {
  if (currentAccessEnvironment !== null) {
    return currentAccessEnvironment;
  }

  commandArgs.forEach((value) => {
    if (value.startsWith('--access=')) {
      currentAccessEnvironment = value.split('=')[1];
      return false;
    }
  });

  if (!currentAccessEnvironment) {
    console.warn(`访问环境为空，自动设置访问环境为DEV环境，请尽量不要忽略访问环境参数`);
    currentAccessEnvironment = ACCESS_ENV_DEV;
  }

  if (ACCESS_ENVIRONMENTS.indexOf(currentAccessEnvironment) === -1) {
    throw new Error(`未知的访问环境: ${currentAccessEnvironment}， 当前支持的访问环境有: ${JSON.stringify(ACCESS_ENVIRONMENTS)}`);
  }

  return currentAccessEnvironment;
}

/**
 * 检查是否是通过watch的方式开启打包的
 */
export function isWatchMode() {
  let watchMode = false;

  commandArgs.forEach((value) => {
    if (value === '--watch' || value.indexOf('webpack-dev-server') !== -1) {
      watchMode = true;
      return false;
    }
  });
  return watchMode;
}

/**
 * 是否是通过webpack-dev-server启动的
 */
export function isDevServeMode() {
  let watchMode = false;

  commandArgs.forEach((value) => {
    if (value.indexOf('webpack-dev-server') !== -1) {
      watchMode = true;
      return false;
    }
  });
  return watchMode;
}