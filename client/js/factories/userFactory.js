MyApp.factory('userFactory', function($http){
	var factory = {}
	var user;
	factory.user;
	factory.foundUser;

	factory.login = function(user, callback){
		console.log("user=", user);
		$http.post('/login', user).success(function(output){
			factory.user = output;
			console.log(factory.user);
			callback(factory.user);
		})
	}

	factory.index = function(callback){
		callback(factory.user);
	}

	factory.logout = function(user){
		factory.user = '';
	}

	factory.getUserById = function(id, callback){
		$http.get('/users/'+id+'/info').success(function(response){
			factory.foundUser = response;
			console.log(response, "GOT BACK USER")
			callback(response);
		})
	}

	return factory;
})
