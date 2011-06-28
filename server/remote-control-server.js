var http = require('http'),
      io = require('./socket.io');

server = http.createServer(function(req, res){
  // your normal server code
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h2>Hello world</h2>');
});

server.listen(3000);
console.log('Server listening in http://localhost:3000');

// socket.io 
var socket = io.listen(server);
socket.on('connection', function(client){
  client.on('message', function(message) {
    console.log(message);
    if(message.action) {
      client.broadcast(message.action);	
    }
  });

  client.on('disconnect', function(){
    client.broadcast('Client just just disconnected');
  });
});

