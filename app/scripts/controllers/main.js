'use strict';

angular.module('socialiteApp')
    .controller('MainCtrl', function($scope, $rootScope, feedServices, $interval) {

        var i = 0;

        feedServices.update()

        $interval(function() {

            feedServices.update()

        }, 10000);

        $interval(function() {

            if (i >= $rootScope.feeds.length) {
                i = 0;
            }
            console.log($rootScope.feeds[i]);
            $rootScope.currentStatus = $rootScope.feeds[i];
            i++;

        }, 3000);

    });