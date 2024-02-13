const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Serve static files (replace with your HTML file location)
app.use(express.static('public'));

// Create HTTP server and WebSocket server
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket route and message handling
app.get('/websocket', (req, res) => {
  res.sendFile('index.html', { root: 'public' }); // Assuming HTML file is in 'public'
});

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Client message:', message);
    ws.send(`Echo: ${message}`); // Echo message back to client
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
