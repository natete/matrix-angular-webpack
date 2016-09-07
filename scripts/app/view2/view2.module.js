'use strict';

import { View2Controller } from './view2.controller';

angular
  .module('myApp.view2', [])
  .config(config)
  .controller('View2Controller', View2Controller);

/* @ngInject */
function config($stateProvider) {
  $stateProvider.state('view2', {
    url: '/view2',
    template: require('./view2.html'),
    controller: 'View2Controller'
  });
}

