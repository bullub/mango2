
import HtmlWebpackPlugin from 'html-webpack-plugin';
import glob from 'glob';
import { resolve } from 'path';

import { isWatchMode } from './environment';

/**
 * 入口查找工具，构建动态入口
 */
export function findEntries() {

  let entries = {};
  let htmlWebpackPlugins = [];

  glob.sync('scripts/**/main.js', { cwd: resolve(__dirname, '../../src') }).forEach(path => {
    const chunkMatcher = path.match(/scripts\/(.+)\/main.js$/);

    // 多重目录，使用.分隔
    const chunkName = chunkMatcher[1];

    console.log(path, chunkName);
    // 创建一个命名chunk
    entries[chunkName] = path;



    const htmlWebpackPluginConf = {
      filename: `pages/${chunkName}.html`,
      template: `pages/${chunkName}.html`,
      appropriate: true,
      // 不用设置hash，因为在输出chunk的时候已经设置了4位的hash值
      // hash: true,
      inject: true, // true or body 为默认值
      // 包含已拆分的代码块
      includeSiblingChunks: true,
      chunks: [chunkName],
      chunksSortMode: 'manual'
    };

    if (!isWatchMode()) {
      htmlWebpackPluginConf.minify = {
        // 把页面中的注释去掉
        removeComments: true,
        // 把多余的空格去掉
        collapseWhitespace: true,
        // 去掉 script 标签的 type 属性
        // removeScriptTypeAttributes: true,
        // 如果有可能的话，去掉包裹属性的引号，不开启，可能会存在兼容性问题
        // removeAttributeQuotes: true
        // 更多可选属性:
        // https://github.com/kangax/html-minifier#options-quick-reference
      };
    }

    htmlWebpackPlugins.push(new HtmlWebpackPlugin(htmlWebpackPluginConf));

  });

  return {
    entries,
    htmlWebpackPlugins
  };
}