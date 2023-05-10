const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); 
console.log('StartServer...............') 
wss.on('connection', function connection(ws) {  
  console.log('Client connected');

  ws.on('message', function incoming(message) { 
    console.log('Received message: %s', message);
   
    wss.clients.forEach(function each(client) { 
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', function close() { 
    console.log('Client disconnected');
  });
});
