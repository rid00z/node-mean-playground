'use strict';

angular.module('play2App')
  .controller('ListfixCtrl', function ($scope, $http, fixFactory) {
    $scope.fixes = [];

    fixFactory.listFix().then(function(result){
    	$scope.fixes = result;
    	console.log(result);
    });

  });
