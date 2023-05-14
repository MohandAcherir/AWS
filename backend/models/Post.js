var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var postSchema = new Schema({
    msg: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    note: String
});

module.exports = mongoose.model('Post', postSchema);