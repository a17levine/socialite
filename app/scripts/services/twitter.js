'use strict';

angular.module('socialiteApp')
  .factory('twitter', function () {

    function authenticate() {

    };

    function unAuthenticate() {

    };

    function search(tag) {
      $http.get(apiUrl + 'search/get' + tag)
    };

    function movetoFeed() {

    };

    return {
      search: search
    };

  });
