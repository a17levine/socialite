'use strict';

angular.module('socialiteApp')
  .factory('instagram', function ($rootScope, feedServices) {


var instagram = {};

  /* ---------- OBJECTS ----------*/

  var lastPostID = '';


  /*----------- CONSTRUCTORS -------------*/

  /*
    Creates a new igPost object
    With only the parameters that we want
  */

  function newPost (post){

    var newPost = {};

    newPost = {
      id: post.id,
      image: {
        url: post.images.standard_resolution.url
      },
      text: post.caption.text,
      source: 'instagram',
      username: post.caption.from.username
    }

    return newPost;

  }
  /* ---------- FUNCTIONS ----------*/

  /*
    Goes through the feed
      Stores only the new posts in an array
      Gets the relevant data and stores in new array
  */

    function processFeed(feed){
     
     var newIG = {};

     $rootScope.feed()

      feedArray = feed.data;
      feedArray.forEach ( function (post){
        if (post.id !== lastPostID){ 
          newIG = newPost(post);
          $rootScope.feeds.unshift(newIG);
        } else {
          break;
        }
      });
    }

  /*  
    Creates the URL that accesses the API
    Calls the API
    Return the JSON and passes that to the callback
  */

    function getFeed (hashTag,callback){
      var url = 'http://socialite-server.herokuapp.com/instagram';
      request = new XMLHttpRequest();
      request.open('GET', url, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400){
          // Success!
          igPostFeed = JSON.parse(request.responseText);
          callback(igPostFeed);
        } else {
          // We reached our target server, but it returned an error

        }
      };
      request.onerror = function() {
        // There was a connection error of some sort
      };
      request.send();
    }

  /*
    Update global tag that contains ID of most recent post
  */

    function updateMostRecentID(){
      if (scopeFeed.length > 0){
        lastPostID = scopeFeed[0].id;
      }
    }

  /* entry point! */

  function search(hashtag){
    updateMostRecentID();
    getFeed(hashtag,processFeed);
  }

  search();



    console.log("hello world");
    instagram.search('fuckyeah');


    // Public API here
    return {

    };
  });
