MyApp.factory('postFactory', function($http){
	var factory = {};
	var user = {};
	// var topics = {};
	factory.topic = {}

	factory.index = function(id, callback){
		console.log('ID passed into get topic function', id)
		$http.get('/topic/'+id).success(function(topic){
			console.log('topic retrieved back to client factory ->', topic)
			factory.topic = topic;
			callback(topic)
		})
	}

	factory.create = function(info, callback){
		$http.post('/posts/new', info).success(function(info){
			callback(info);
		})
	}

	factory.getPosts = function(info, callback){
		console.log('in factory getPosts')
		$http.post('/posts', info).success(function(info){
			callback(info);
		})
	}

	factory.comment = function(info, callback){
		console.log('new comment here', info)
		$http.post('/comment/new', info).success(function(info){
			callback(info);
		})
	}

	factory.update = function(info, callback){
		$http.get('/posts/'+info+'/like').success(function(info){
			callback(info);
		})
	}
	factory.downvote = function(info, callback){
		$http.get('/posts/'+info+'/dislike').success(function(info){
			callback(info);
		})
	}

	return factory;
})
