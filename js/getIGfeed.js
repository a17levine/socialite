
$scope.feed = [
	{
		photoUrl: "",
		title: "",
		author: "",
		source: "instagram",
	}
]

var igTagURL = 'https://api.instagram.com/v1/tags/',
	recentTags = '/media/recent?',
	clientID = 'client_id=4a21d77050354080b0269479931553ad'


https://api.instagram.com/v1/tags/fuckyeah/media/recent?client_id=4a21d77050354080b0269479931553ad


$http.get('/someUrl').success(successCallback);
jsonList.foreach ( function (post){
	var newIG = newPost(jsonlist.photourl,title,author,source);
	$scope.feed.unshift(newIG);
});
