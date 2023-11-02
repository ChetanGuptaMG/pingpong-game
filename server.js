const app = require('./api');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = 8000;

server.listen(PORT);
console.log(`Listening on port ${PORT}...`);

const sockets = require('./sockets');
sockets.listen(io);