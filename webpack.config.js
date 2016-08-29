var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          {
              test : /\.jsx?/,
              include : APP_DIR,
              loader : 'babel'
          },
          {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: APP_DIR
          },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            include: APP_DIR
          }
      ]
  }
};

module.exports = config;
