console.log('in usersController');

MyApp.controller('usersController', function($scope, userFactory, $location){
	$scope.user = {};
	$scope.foundUser = userFactory.foundUser;

	$scope.login = function(user){
		userFactory.login(user, function(data){
			$scope.user = data;
			$location.url('/dashboard');
		})
	}

	$scope.getUser = function(){
		userFactory.getUser(function(data){
			if(data){
				$scope.user = data;
			}
		})
	}
	$scope.getUserById = function(id){
		userFactory.getUserById(id, function(data){
			if (data){
				console.log(data)
			}
		})
	}
})
