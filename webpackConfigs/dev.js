const webpack = require('webpack');
const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const path = require('path');

const config = Object.assign({}, baseConfig, {
  entry: [
    `webpack-dev-server/client?http://127.0.0.1:${defaultSettings.port}`,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loaders: ['react-hot', 'babel'],
  include: [...config.additionalPaths, path.join(__dirname, '/../src')]
});

module.exports = config;
