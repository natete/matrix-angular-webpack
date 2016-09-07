var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var bootstrapEntryPoints = require('./webpack.bootstrap.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSass = new ExtractTextPlugin('styles.css');
module.exports = {
  context: __dirname + '/scripts/app',
  // watch: true,
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
        test: /scripts.*\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate?add=true&remove=true&single_quotes=true',
          'babel?cacheDirectory=true'
        ]
      },
      { 
        test: /bootstrap-sass\/assets\/javascripts\//, 
        loader: 'imports?jQuery=jquery' 
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractSass.extract(['style', 'css', 'postcss', 'sass'])
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/
      }
    ]
  },
  postcss: [autoprefixer],
  plugins: [
    extractSass
  ]
};