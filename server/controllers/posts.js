console.log('in serer posts controller')

var mongoose= require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');

module.exports = {
	index: function(req, res){
		console.log('inside posts index fn');
		Post.find({}).populate('_user _comments _topic').exec().populate('_comments').exec(function(err, data){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				console.log(data, '<--- all posts as retrieved by db')
				res.json(data)
			}
		})
	},
	create: function(req, res){
		console.log('inside posts create fn', req.body);
		var post = new Post(req.body);
		console.log('this post going into db: ', req.body)
		post.save(function(err, post){
			if(err){
				console.log(err)
				res.json(err)
			}else{
				Topic.findOneAndUpdate({_id: req.body._topic}, {$push: {_postings: post._id}}, function(err, topic){
					if (err){
						console.log(err);
						res.json(err);
					}else{
						User.findOneAndUpdate({_id: req.body._user}, {$push: {_posts: req.body._id}}, function(err, user){
							if (err){
								console.log(err)
								res.json(err)
							}else{
								console.log('db push successful, post=', post)
								res.json(topic, user)
							}
						})
					}
				})
			}
		})
	},
	like: function(req, res){
		console.log('in servercontroller like', req.params.id);
		Post.findOneAndUpdate({_id: req.params.id}, {$inc: {likes: +1}}, function(err, post){
			if (err){
				res.json(err)
			}else{
				res.json(post)
			}
		})
	},
	dislike: function(req, res){
		console.log('in servercontroller dislike', req.params.id);
		Post.findOneAndUpdate({_id: req.params.id}, {$inc: {likes: -1}}, function(err, post){
			if (err){
				res.json(err)
			}else{
				res.json(post)
			}
		})
	},
}
