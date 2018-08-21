import { resolve } from 'path';
import { getAccessEnvironment } from "../utils/environment";


export default {
  context: resolve(__dirname, '../../src'),
  entry: ['pages/index/main.js'],
  output: {
    path: resolve(__dirname, '../../dist'),
    filename: 'assets/scripts/[name].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      config$: `config/${getAccessEnvironment()}.js`,
      pages: resolve(__dirname, '../../src/pages')
    }
    // modules: ['*', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};