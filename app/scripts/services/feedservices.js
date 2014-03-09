'use strict';

angular.module('socialiteApp')
    .factory('feedServices', function($rootScope, twitter, instagram) {

        $rootScope.feeds = [];

        function addTwitterToFeed(result) {

            var statuses = result.statuses,
                updatedStatus = [],
                status;

            for (var x = 0; x < 5; x++) {
                status = {
                    username: statuses[x].user.screen_name,
                    id: statuses[x].id,
                    text: statuses[x].text,
                    time: Date.parse(statuses[x].created_at)/1000,
                    source: 'twitter'
                };

                updatedStatus.unshift(status);
                
            }

            return updatedStatus;
        };


        function addInstagramToFeed(result) {
            var statuses = result.data,
                updatedStatus = [],
                status;

            for (var x = 0; x < 5 ; x++) {

                if (statuses[x].caption.text.length > 140) {
                  statuses[x].caption.text = statuses[x].caption.text.substring(0,138) + "...";
                }
                

                status = {
                    username: statuses[x].user.username,
                    id: statuses[x].id,
                    text: statuses[x].caption.text.substring(0,140),
                    image: {
                        url: statuses[x].images.standard_resolution.url
                    },
                    time: parseInt(statuses[x].created_time),
                    source: 'instagram'
                };

                updatedStatus.unshift(status);
                
            }
            
            return updatedStatus;

        };

        function parseTwitter() {
          twitter.getResults()
            .then(addTwitterToFeed)
            .then(updateFeed);
        };

        function parseInstagram() {
          instagram.getResults()
            .then(addInstagramToFeed)
            .then(updateFeed);
        };

        function updateFeed(result) {

            // Iterate through results
            for(var x=0; x < result.length; x++) {

              // If this results ID does not exist in current feeds array
              if(!_.findWhere($rootScope.feeds, {id: result[x].id})) {
                // Push into feeds
                $rootScope.feeds.push(result[x]);
              }

            }

            // Sort time from newest to oldest
            $rootScope.feeds.sort(function(a,b){return b.time - a.time})

            // Prune to 10 objects
            $rootScope.feeds.slice(0,10);

            // Check if times are working
            console.groupCollapsed('time');
            for(var i=0; i<$rootScope.feeds.length; i++) {
              console.log($rootScope.feeds[i].time)
            }
            console.groupEnd();

        };

        function update() {
            parseTwitter();
            parseInstagram();
        };
        
        // Public API here
        return {
            update: update
        };
    });