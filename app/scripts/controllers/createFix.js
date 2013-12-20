'use strict';

angular.module('play2App')
  .controller('CreatefixCtrl', function ($scope, $http, fixFactory) {
    
    $scope.fix = {};

    $scope.createFix = function () {
    	
    	fixFactory.createFix($scope.fix).then(function(data) {
	        alert(data);
	    });

    }

});

