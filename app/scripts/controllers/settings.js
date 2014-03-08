'use strict';

angular.module('socialiteApp')
  .controller('SettingsCtrl', function ($scope, twitter) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.twitterAuthenticate = function() {
    	console.log($scope.twitter.secretKey);
    	twitter.authenticate()
    }

  });
