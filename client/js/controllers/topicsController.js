console.log('in topicsController');

MyApp.controller('topicsController', function($scope, userFactory, topicFactory){
	$scope.user = {};
	$scope.topics = {};

	function getUser(){
		userFactory.index(function(data){
				$scope.user = data;
		})
	}
	getUser();

	function getTopics(){
		topicFactory.index(function(data){
			$scope.topics = data;
		})
	}
	getTopics()

	function getCategories(){
		topicFactory.categoriesGet(function(data){
			$scope.categories = data;
		})
	}
	getCategories()

	$scope.addTopic = function(data){
		$scope.new_topic._user = $scope.user._id
		topicFactory.create($scope.new_topic, function($scope, topicFactory){
			console.log('topicFactory create calledback');
			// getTopics();
			$scope.new_topic = {};
			getTopics()
		})
	}

})
