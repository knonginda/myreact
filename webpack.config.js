var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

var webpackConfig = {
  entry:  path.resolve(__dirname, './js/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './index.html'),
        filename: 'index.html',
        sourceMap: true,
        inject: 'body'
    }),
  ]
}

module.exports = webpackConfig;