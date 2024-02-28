const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files from the 'public' folder

const io = new Server(http);

function setupWebSocketServer(server) {
  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('message', (data) => {
      console.log('Received message:', data);
      socket.broadcast.emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

setupWebSocketServer(http);

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
