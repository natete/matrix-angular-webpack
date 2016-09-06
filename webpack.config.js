var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var bootstrapEntryPoints = require('./webpack.bootstrap.config');
module.exports = {
  context: __dirname + '/scripts/app',
  watch: true,
  entry: [
    bootstrapEntryPoints.dev,
    './index'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { 
        test: /bootstrap-sass\/assets\/javascripts\//, 
        loader: 'imports?jQuery=jquery' 
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
  ]
};