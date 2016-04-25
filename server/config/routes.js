console.log('server routes')

var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){
	app.post('/login', function(req, res){
		users.login(req, res);
	})
	app.get('/users/:id/info', function(req, res){
		console.log('server routes, id=', req.params.id)
		users.findOne(req, res);
	})
	app.post('/topics', function(req, res){
		topics.index(req, res);
	})
	app.post('/topics/new', function(req, res){
		// console.log('attempting to create new topic,', req.body)
		topics.create(req, res);
	})
	app.get('/topic/:id', function(req, res){
		topics.find(req, res);
	})
	app.post('/posts', function(req, res){
		posts.index(req, res);
	})
	app.post('/posts/new', function(req, res){
		// console.log('attempting to create new post,', req.body)
		posts.create(req, res);
	})
	app.get('/posts/:id/like', function(req, res){
		posts.like(req, res);
	})
	app.get('/posts/:id/dislike', function(req, res){
		posts.dislike(req, res);
	})
	app.post('/comment/new', function(req, res){
		console.log('attempting to create new comment,', req.body)
		comments.create(req, res);
	})
}
