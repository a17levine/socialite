
var instagram = {};



	

	// $scope.instagram = [
	// 	{

	// 	}
	// ]

	// var module = (function(){
	//     var privateFuncs = {
	//         privateMethod: function(val) {
	//             console.log(val);
	//         }
	//     };
	//     var publicMethod = function() {
	//         var functionString = "privateMethod";
	//         privateFuncs[functionString]('test');
	//     };
	//     return {
	//         init: publicMethod
	//     };
	// })();

(function(){

	/* ---------- OBJECTS ----------*/

	var scopeFeed = [
						{
							photoUrl: "",
							title: "",
							author: "",
							source: "instagram",
							id: ""
						}
					],
					igPost = {
						photoUrl: "",
						title: "",
						author: "",
						source: "instagram",
						id: "",
					},
					 lastPostID = '';


	/*----------- CONSTRUCTORS -------------*/

	/*
		Creates a new igPost object
		With only the parameters that we want
	*/

	function newPost (post){
		var newPost = Object.create(igPost),
			url = post.images.standard_resolution.url;
			title = post.caption.text,
			author = post.caption.from.username,
			id = post.id;
		newPost.photoUrl = url;
		newPost.title = title;
		newPost.author = author;
		newPost.id = id;
		return newPost;


	}
	/* ---------- FUNCTIONS ----------*/

	/*
		Goes through the feed
			Stores only the new posts in an array
			Gets the relevant data and stores in new array
	*/

	function processFeed(feed){
		var feedArray = [],
			newIG = {};
		feedArray = feed.data;
		feedArray.forEach ( function (post){
			if (post.id !== lastPostID){ 
				newIG = newPost(post);
				scopeFeed.unshift(newIG);
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
		var igTagURL = 'https://api.instagram.com/v1/tags/',
			recentTags = '/media/recent?',
			clientID = 'client_id=4a21d77050354080b0269479931553ad',
			igPostFeed = {},
			url = igTagURL + hashTag + recentTags + clientID;
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

	instagram.search = search;


})();

console.log("hello world");
instagram.search('fuckyeah');