const Tweet = require('../models/Tweet');

module.exports = {
    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt');
        
        return res.json(tweets);
    },
    async add(req, res) {
        const tweet = await Tweet.create(req.body);

        req.io.local.emit('new_tweet', tweet);
        
        return res.json(tweet);
    },
    async patchContent(req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({content: req.body.content});
        await tweet.save();

        req.io.emit('patch_tweet', tweet);

        return res.json(tweet);
    },
    async edit(req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set(req.body);
        await tweet.save();

        req.io.emit('edit_tweet', tweet);

        return res.json(tweet);
    }
};