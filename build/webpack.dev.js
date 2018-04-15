const webpack      = require('webpack');
const webpackMerge = require('webpack-merge');
const config       = require('./webpack.base');
const paht         = require('path');
module.exports     = webpackMerge(config, {
  entry: [],
  module: {
    rules: [

    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    hotOnly: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true,
    },
    proxy: {
      '/[new|api|knew]': {
        target: 'www.kaoyaya.com',
        changeOrigin: true,
      },
    },
  },
});