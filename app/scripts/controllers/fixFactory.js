angular.module('play2App')
  .factory('fixFactory', function($http) {
   return {
        createFix: function(fix) {
           //return the promise directly.
           return $http.post('/api/createFix', fix)
                     .then(function(result) {
                          //resolve the promise as the data
                          return result.data;
                      });
        },
        listFix: function() {
          return $http.get('/api/listFix')
                      .then(function (result) {
                        return result.data;
                      });
        },
        getFix: function(id) {
          return $http.get('/api/getFix', id)
                      .then(function (result) {
                        return result.data;
                      });
        }
   }
});

