const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    server = require('http').Server(app),
    io = require('socket.io').listen(server),
    socket = require('socket.io-client').connect('http://localhost:3000'),
    cors = require('cors');

socket.on('new_tweet', (data) => {
    console.log(data);
});

mongoose.connect('mongodb://milo:sk7walk34@ds155243.mlab.com:55243/goweek_milo', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});