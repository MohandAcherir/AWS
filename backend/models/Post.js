var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var postSchema = new Schema({
    msg: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Post', postSchema);