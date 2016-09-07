'use strict';

import {} from 'angular-ui-router';
import {} from './view1/view1.module';
import {} from './view2/view2.module';

angular
  .module('myApp',
    [
      'ui.router',
      'myApp.view1',
      'myApp.view2'
    ])
  .config(config);

/* @ngInject */
function config($locationProvider) {
  $locationProvider.hashPrefix('!');
}