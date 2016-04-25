console.log('in server topics controller')

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');

module.exports = {
	index: function(req, res){
		console.log('inside topics index fn');
		Topic.find({}).populate('_user ').exec(function(err, data){
			if (err){
				res.json(err)
			}else{
				// data.forEach(function(data){
					res.json(data)
				// })
			}
		})
	},
	create: function(req, res){
		console.log('inside topics create fn', req.body);
		var topic = new Topic(req.body);
		console.log('this is gooing in db: ', req.body)
		topic.save(function(err, topic){
			if(err){
				console.log("HEYHEY ERR", err)
				res.json(err)
			}else{
				console.log('HEY HEY', req.body._user, req.body)
				User.findOneAndUpdate({_id: req.body._user}, {$push: {_topics: req.body._user._id}}, function(err){
					if (err){
						console.log(err)
					}else{
						console.log('db push successful')
						res.json(topic)
					}
				})
			}
		})
	},
	find: function(req, res){
		Topic.find({_id: req.params.id}).deepPopulate('_user _postings _postings._comments._user _postings._comments _user.name').exec(function(err, data){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				res.json(data)
			}
		})
	},
}
