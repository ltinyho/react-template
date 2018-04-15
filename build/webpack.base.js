const path             = require('path'); // 引入‘path’，为了在这里使用绝对路径，避免相对路径在不同系统时出现不必要的问题
const htmlWebpckPlugin = require('html-webpack-plugin');
const paht             = require('path');
module.exports         = {
  // 应用入口
  entry: [
    // 'react-hot-loader/patch',  待校验作用
    path.join(__dirname, '../src/app.js')  // app.js作为打包的入口
  ],
  // 输出目录
  output: {
    filename: '[name].[hash].js',  //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
    path: path.join(__dirname, '../dist'), // 打包好之后的输出路径
    publicPath: '/' // 静态资源文件引用时的路径（加在引用静态资源前面的）
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paht.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter'),
            },
          },
          {
            loader: 'babel-loader',
          }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new htmlWebpckPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
  ],
};