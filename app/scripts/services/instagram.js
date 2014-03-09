'use strict';

angular.module('socialiteApp')
  .factory('instagram', function ($rootScope, $q, $http) {


    var host = 'http://socialite-server.herokuapp.com/instagram';

    function get() {
      
      var deferred = $q.defer();

      $http.get(host)
          .success(deferred.resolve)
          .error(deferred.reject);
      
      return deferred.promise;

    };

    return {
      getResults: get,
    };

  });
