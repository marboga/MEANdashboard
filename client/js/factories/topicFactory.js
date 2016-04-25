MyApp.factory('topicFactory', function($http){
	var factory = {}
	var user;
	var topics = {};

	factory.categories = ['humor', 'public interest', 'news', 'anecdote', 'sports', 'trivia', 'gossip', 'weather', 'philosophy', 'nature', 'politics', 'religion']

	factory.index = function(callback){
		$http.post('/topics').success(function(topics){
			// console.log('topics = ', topics);
			callback(topics)
		})
	}
	factory.create = function(info, callback){
		// console.log('in client topics factory, info=', info);
		$http.post('/topics/new', info).success(function(info){
			callback(info);
		})
	}

	factory.categoriesGet = function(callback){
		callback(factory.categories)
	}


	return factory;
})
