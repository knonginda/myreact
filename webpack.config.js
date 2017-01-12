'use strict';
var webpack = require('webpack'),
    path = require('path');

var webpackConfig = {
  entry:  path.join(__dirname, 'js/index.js'),
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loaders: [
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }
    ]
  }
}

module.exports = webpackConfig;