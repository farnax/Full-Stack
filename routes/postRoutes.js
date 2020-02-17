const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin.js');
const requireCredits = require('../middlewares/requireCredits.js');

const Post = mongoose.model('posts');

module.exports = app => {
  app.get('/api/posts', requireLogin, async (req, res) => {
    const posts = await Post.find({});
    
    res.send(posts);
  });

  app.post('/api/posts', requireLogin, requireCredits, async (req, res) => {
    const { author, title, body } = req.body;

    const post = new Post({
      author,
      title,
      body,
      _user: req.user.id,
      date: Date.now()
    });
    try {
      await post.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};