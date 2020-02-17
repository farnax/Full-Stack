const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({ 
  author: String,
  title: String,
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  date: Date
});

mongoose.model('posts', postSchema);