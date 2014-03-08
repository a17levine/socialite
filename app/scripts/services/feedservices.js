'use strict';

angular.module('socialiteApp')
  .factory('feedServices', function ($rootScope) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
