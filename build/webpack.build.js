const webpackMerge = require('webpack-merge');
const config       = require('./webpack.base');

module.exports = webpackMerge(config, {
  plugins: [],
});