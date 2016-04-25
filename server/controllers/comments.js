console.log('in serer posts controller')

var mongoose= require('mongoose');
var User = mongoose.model('User');
var Topic = mongoose.model('Topic');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
	create: function(req, res){
		console.log('made it to comments create function in server controller', req.body)
		var comment = new Comment(req.body);
		comment.save(function(err, new_comment){
			if (err){
				console.log(err)
				res.json(err)
			}else{
				console.log("NOT BROKEN YERT, comment", comment, "AAAAAAAAAAAAAAA", req.body._post)
				Post.findOne({_id: req.body._post}, function(err, new_post){
					console.log(new_post, 'NEW POST')
					if (err){
						console.log(err)
						res.json(err)
					}else{
						console.log(new_post)
						new_post._comments.push(new_comment._id)
						new_post.save()
						User.findOne({_id: req.body._user}, function(err, user){
							if (err){
								console.log(err)
								res.json(err)
							}else{
								user._comments.push(new_comment._id)
								user.save()
								console.log(user._comments)
								console.log('db push successful:', User)
								res.json(User, new_post, comment)
							}
						})
					}
				})
			}
		})
	},
}
