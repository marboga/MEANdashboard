MyApp.config(function($routeProvider){


	$routeProvider

	.when('/', {
		templateUrl: './../views/login.html',
		controller: 'usersController'
	})
	.when('/dashboard', {
		templateUrl: './../views/dashboard.html',
		controller: 'topicsController'
	})
	.when('/topic/:id', {
		templateUrl: './../views/posts.html', controller: 'postsController'
	})
	.when('/user/:id', {
		templateUrl: './../views/user.html', controller: 'usersController'
	})
	.otherwise('/')
})
