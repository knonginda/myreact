var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

var webpackConfig = {
  entry:  path.resolve(__dirname, './js/index.jsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
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