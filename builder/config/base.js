import { resolve } from 'path';

export default {
  context: resolve(__dirname, '../../src'),
  entry: ['pages/index/main.js'],
  output: {
    path: resolve(__dirname, '../../dist'),
    filename: 'assets/scripts/[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['*', '.js', '.json'],
    alias: {
      // 页面开始的地方
      pages: resolve(__dirname, '../../src/pages'),
      // 公共资源的位置
      assets: resolve(__dirname, '../../src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  }
};