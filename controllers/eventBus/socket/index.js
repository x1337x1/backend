// index.js
const WebSocket = require('ws');

class WebSocketServer {
  constructor(url) {
    this.url = url;
    this.ws = null;
    this.connectionOpenCount = 0;  // Counter for opened connections
    this.connectionCloseCount = 0; // Counter for closed connections
    this.init();
  }

  // Initialize the WebSocket connection
  init() {
    this.ws = new WebSocket(this.url);

    // Bind event handlers
    this.ws.on('open', this.onOpen.bind(this));
    this.ws.on('message', this.onMessage.bind(this));
    this.ws.on('error', this.onError.bind(this));
    this.ws.on('close', this.onClose.bind(this));
  }

  // Event handler for 'open'
  onOpen() {
    this.connectionOpenCount += 1;
    console.log(`Connections opened ${this.connectionOpenCount}`);
    this.sendMessage('Hello Server');
  }

  // Event handler for 'message'
  onMessage(data) {
    console.log('Received:', data);
  }

  // Event handler for 'error'
  onError(error) {
    console.error('WebSocket Error:', error);
  }

  // Event handler for 'close'
  onClose(code, reason) {
    this.connectionCloseCount += 1;
    console.log(`Connection closed (${this.connectionCloseCount} total closings)`, { code, reason });
    this.reconnect();
  }

  // Send a message to the server
  sendMessage(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(message);
    } else {
      console.log('Connection is not open. Message not sent:', message);
    }
  }

  // Attempt to reconnect on disconnection
  reconnect() {
    console.log('Attempting to reconnect...');
    setTimeout(() => {
      this.init();
    }, 5000); // Reconnect after 5 seconds
  }
}


module.exports = WebSocketServer;

