//https://api.instagram.com/v1/tags/fuckyeah/media/recent?client_id=4a21d77050354080b0269479931553ad

/* ---------- OBJECTS ----------*/

$scope.feed = [
	{
		photoUrl: "",
		title: "",
		author: "",
		source: "instagram",
	}
]

$scope.instagram = [
	{

	}
]


var igPost = {
	photoUrl: "",
	title: "",
	author: "",
	source: "instagram",
}

var igTagURL = 'https://api.instagram.com/v1/tags/',
	recentTags = '/media/recent?',
	tagName = 'fuckyeah',
	clientID = 'client_id=4a21d77050354080b0269479931553ad';




var igPostFeed = $http.get(igTagURL+tagName+recentTags+clientID).success(successCallback);
console.log(igTags);




igPosts.foreach ( function (post){
	var newIG = newPost(jsonlist.photourl,title,author,source);
	$scope.feed.unshift(newIG);
});



function newPost (post){
	var newPost = Object.create(igPost),
		url = post.images.standard_resolution.url;
		title = post.caption.text,
		author = post.caption.from.username;
	newPost.photoUrl = url;
	newPost.title = title;
	newPost.author = author;
}