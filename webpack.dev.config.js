'use strict';

const webpackConfig = require('./webpack.config');

webpackConfig.module.loaders.push(
  {
    test: /scripts\/app\/.+\.js$/,
    loaders: ['ng-annotate?add=true&remove=true&single_quotes=true']
  }
);

module.exports = webpackConfig;