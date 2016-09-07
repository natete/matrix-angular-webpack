'use strict';

var View1Controller = require('./view1.controller');

angular
  .module('myApp.view1', [])
  .config(config)
  .controller('View1Controller', View1Controller);

/* @ngInject */
function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('view1', {
    url: '/view1',
    template: require('./view1.html'),
    controller: 'View1Controller'
  });

  $urlRouterProvider.otherwise('/view1')
}

