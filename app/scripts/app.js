'use strict';

angular.module('play2App', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/listFix',
        controller: 'MainCtrl'
      })
      .when('/createFix', {
        templateUrl: 'partials/createFix',
        controller: 'CreatefixCtrl'
      })
      .when('/listFix', {
        templateUrl: 'partials/listFix',
        controller: 'ListfixCtrl'
      })
      .when('/viewFix', {
        templateUrl: 'partials/viewFix',
        controller: 'ViewfixCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
