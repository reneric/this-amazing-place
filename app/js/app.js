'use strict';

/* App Module */

var app = angular.module('app', [], function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: '/app/home',
    controller: HomeController
  });
  $routeProvider.otherwise( { redirectTo: '/'} );
  
  // configure html5 to get links working
  // If you don't do this, you URLs will be base.com/#/home rather than base.com/home
  $locationProvider.html5Mode(true);
});

