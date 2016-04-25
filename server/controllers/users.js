console.log('in serverside user controller')

var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	login: function(req, res){
		console.log('inside login function, name=', req.body.name)
		User.findOne({name: req.body.name}, function(err, user){
			if(err){
				res.json(err)
			}else{
				console.log('no error in search')
				if (user){
					res.json(user)
				}else{
					var user = new User(req.body)
					user.save(function(err, user){
						if (err){
							res.json(err)
						}else{
							res.json(user)
						}
					})
				}
			}
		})
	},
	findOne: function(req, res){
		// console.log('in findOne function', req.params.id)
		User.findOne({_id: req.params.id}, function(err, user){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				console.log(user, "USER RETRIEVED")
				res.json(user)
			}
		})
	},
}
