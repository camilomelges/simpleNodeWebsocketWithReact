const Tweet = require('../models/Tweet');

module.exports = {
    async add(req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({likes: ++tweet.likes});
        tweet.save();

        req.io.emit('like_tweet', tweet);

        return res.json(tweet);
    }
};