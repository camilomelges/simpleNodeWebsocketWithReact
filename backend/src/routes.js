const express = require('express'),
    routes = express.Router(),
    TweetController = require('./controllers/TweetController'),
    LikeController = require('./controllers/LikeController');

//get
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.add);
routes.patch('/likes/:id', LikeController.add)
routes.put('/tweets/:id', TweetController.edit);
routes.patch('/tweets/:id', TweetController.patchContent);
//post
//put
//patch

module.exports = routes;