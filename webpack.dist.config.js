'use strict';

const webpackConfig = require('./webpack.config');

// webpackConfig.module.loaders.push(
//   {
//     test: /\.js$/,
//     exclude: /node_modules/,
//     loaders: ['ng-annotate?add=true&remove=true&single_quotes=true']
//   }
// );

module.exports = webpackConfig;