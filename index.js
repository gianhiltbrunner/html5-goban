var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/goban', function(req, res){
	res.sendFile(__dirname + '/goban.html');
});

io.on('connection', function(socket){
  socket.on('move', function(msg){
    io.emit('move', msg);
    console.log(msg);
  });
});

server.listen(3000);
