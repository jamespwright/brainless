var io = require('socket.io').listen(3000);

// Global Socket code
io.sockets.on('connection', function (socket) {
    console.log('Someone connected');
    socket.emit('hello!', { message: "Hello to you!" });
});