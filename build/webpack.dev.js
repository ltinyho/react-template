const webpack      = require('webpack');
const webpackMerge = require('webpack-merge');
const config       = require('./webpack.base');

module.exports = webpackMerge(config, {
  entry: [],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    hotOnly: true,
    port: 9000,
    open: true,
    watchOptions: {
      poll: true,
    },
  },
});