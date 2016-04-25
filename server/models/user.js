var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	_topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	_postings: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

mongoose.model('User', UserSchema)
