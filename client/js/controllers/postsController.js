console.log('in client Posts controller')

MyApp.controller('postsController', function($scope, userFactory, postFactory, $routeParams){
	console.log('loading posts controller')
	var topic = postFactory.topic;
	$scope.currentUser = userFactory.user
	console.log($scope.currentUser, 'SCOPE CURRUSER')

	function getUser(){
		userFactory.index(function(data){
			$scope.user = data;
			console.log($scope.user, 'I AM USER CURRENT')
		})
	}
	getUser();

	function getTopic(){
		// console.log($routeParams.id)
		var topicId = $routeParams.id
		postFactory.index(topicId, function(data){
			$scope.topic = data[0];
			$scope.postings = data[0]._postings
			// console.log($scope.topic, "SCOPE TOPIC")
		})
	}
	getTopic();

	$scope.addPost = function(data){
		$scope.new_post._user = $scope.user._id;
		$scope.new_post._topic = $routeParams.id;
		postFactory.create($scope.new_post, function($scope, postFactory){
			console.log('bubbled back up')
			$scope.new_post = {};
			getTopic();
		})
	}

	$scope.addComment = function(new_comment, post){
		var curr = $scope.currentUser._id
		new_comment._user = curr
		new_comment._post = post

		console.log("comment to be EBNERTWTSFDAS", new_comment);

		postFactory.comment(new_comment, function($scope, postFactory){
			// $scope.new_comment = {}
			getTopic();
		})
	}

	$scope.addLike = function(post){
		console.log('attempting to add like', post)
		postFactory.update(post, function(post, postFactory){
			getTopic();
		})
	}
	$scope.downVote = function(post){
		console.log('attempting to remove like', post)
		postFactory.downvote(post, function(post, postFactory){
			getTopic();
		})
	}
	$scope.getUserById = function(id){
		console.log('trying to get user by Id, ', id)
		userFactory.getUserById(id, function(data){
			if (data){
				$scope.foundUser = data
			}
		})
	}
})
