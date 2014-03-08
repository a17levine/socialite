//https://api.instagram.com/v1/tags/fuckyeah/media/recent?client_id=4a21d77050354080b0269479931553ad

var instragram = { 
	igPost: igPost	
}


	/* ---------- OBJECTS ----------*/

	// $scope.feed = [
	// 	{
	// 		photoUrl: "",
	// 		title: "",
	// 		author: "",
	// 		source: "instagram",
	// 	}
	// ]

	// $scope.instagram = [
	// 	{

	// 	}
	// ]

	var igPost = {
		photoUrl: "",
		title: "",
		author: "",
		source: "instagram",
		id: "",
	}


	/*----------- CONSTRUCTORS -------------*/

	function newPost (post){
		var newPost = Object.create(igPost),
			url = post.images.standard_resolution.url;
			title = post.caption.text,
			author = post.caption.from.username;
		newPost.photoUrl = url;
		newPost.title = title;
		newPost.author = author;
	}
	/* ---------- FUNCTIONS ----------*/

	function getUpdates(fullFeed,newFeed,number){
		// newFeed = foreach.
		// feed.foreach ( function (post){
		// 	var newIG = newPost(jsonlist.photourl,title,author,source);
		// 	$scope.feed.unshift(newIG);
		// });
	}

	function getFeed (hashtag){
		var igTagURL = 'https://api.instagram.com/v1/tags/',
			recentTags = '/media/recent?',
			tagName = 'fuckyeah',
			clientID = 'client_id=4a21d77050354080b0269479931553ad',
			igPostFeed = '';

		igPostFeed = $http.get(igTagURL+hashtag+recentTags+clientID).success(successCallback);
		return igPostFeed;
	}

	function getIGstream (){
		console.log("helloworld");
		hashtag = 'fuckyeah';
		var feed = getFeed(hashtag);
		console.log(feed);

		// store result in variable
		// translate the feed to an array of our type of objects
		// push our objects onto the top of the array
		// translate that array
	}
console.log("hello world");
getIGstream();


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

	function newPost (post){
		var newPost = Object.create(igPost),
			url = post.images.standard_resolution.url;
			title = post.caption.text,
			author = post.caption.from.username;
		newPost.photoUrl = url;
		newPost.title = title;
		newPost.author = author;
	}


