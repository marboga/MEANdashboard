console.log('in comment model')

var mongoose = require('mongoose');

var deepPopulate = require('mongoose-deep-populate')(mongoose)

var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
	comment: {type: String, required: true},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

CommentSchema.plugin(deepPopulate);

mongoose.model('Comment', CommentSchema);
