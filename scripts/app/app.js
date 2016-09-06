'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
]).
config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');

}]);
