'use strict';

angular.module('socialiteApp')
  .factory('twitter', function ($http, $rootScope, $q) {

    var host = 'http://socialite-server.herokuapp.com/twitter';

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
