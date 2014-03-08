'use strict';

angular.module('socialiteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }) 
  .run(function ($http, $rootScope) {
    $http.defaults.headers.common.Authentication = 'Basic YmVlcDpib29w';

    $rootScope.feeds = [
      {
        image: {
          url: 'http://distilleryimage11.ak.instagram.com/1f2114faa5d511e3900e12c05a5762ef_8.jpg'
        },
        tags: ['#pipe', '#hash', '#hastag', '#tag', '#graffiti'],
        title: 'Whats Up!',
        author: '@johnny'
      },
      {
        image: {
          url: 'http://distilleryimage11.ak.instagram.com/1f2114faa5d511e3900e12c05a5762ef_8.jpg'
        },
        tags: ['#pipe', '#hash', '#hastag', '#tag', '#graffiti'],
        title: 'Whats Up!',
        author: '@johnny'
      },
      {
        image: {
          url: 'http://distilleryimage11.ak.instagram.com/1f2114faa5d511e3900e12c05a5762ef_8.jpg'
        },
        tags: ['#pipe', '#hash', '#hastag', '#tag', '#graffiti'],
        title: 'Whats Up!',
        author: '@johnny'
      }
    ];

    console.log($rootScope.feeds);

  });
