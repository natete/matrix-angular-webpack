import angular from 'angular';
require('bootstrap-loader');
require('./app');

angular.element(document).ready(function () {
  angular.bootstrap(document, ['myApp']);
});

// angular.module('myApp', []);
