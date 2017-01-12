var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry:  path.join(__dirname, 'js/index.js'),
  output: {
    path: __dirname,
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}