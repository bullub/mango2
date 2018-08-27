export default class RelativeAssetTagsPathPlugin {
  constructor(options) {

  }

  apply(compiler) {
    compiler.hooks.compilation.tap('RelativeAssetTagsPathPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync('RelativeAssetTagsPathPlugin', (data, callback) => {
        callback(null, data);
      });
    })
  }
}