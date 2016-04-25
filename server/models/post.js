console.log('in post model')

var mongoose = require('mongoose');

var deepPopulate = require('mongoose-deep-populate')(mongoose)

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	message: {type: String, required: true},
	likes: {type: Number, default: 0},
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

PostSchema.plugin(deepPopulate);
mongoose.model('Post', PostSchema);
