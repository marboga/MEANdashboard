var mongoose = require('mongoose');

var deepPopulate = require('mongoose-deep-populate')(mongoose)

var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 5},
	description: {type: String, required: true, minlength: 5},
	category: {type: String, required: true},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_postings: [{type: Schema.Types.ObjectId, ref: 'Post'}],
}, {timestamps: true})

TopicSchema.plugin(deepPopulate);
mongoose.model('Topic', TopicSchema)
