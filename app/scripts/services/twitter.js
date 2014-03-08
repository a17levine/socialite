'use strict';

angular.module('socialiteApp')
  .factory('twitter', function ($http, $rootScope, $q) {

    var host = 'https://api.twitter.com/1.1';

    function authenticate() {

      $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.twitter.secretKey;

      $http.post(host + '/oauth2/token', function(result){
        console.log("result")
      })
    };

    function unAuthenticate() {

    };

    function search(tag) {
      $http.get(apiUrl + 'search/get' + tag)
    };

    function movetoFeed() {

    };

    return {
      search: search,
      authenticate: authenticate
    };

  });
