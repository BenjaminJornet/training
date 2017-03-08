//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
/*process.env.PORT = 8080;
process.env.IP = "http://localhost";*/

var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var bodyParser = require('body-parser')

var blockchainWrapper = require('./Node/blockchain.js');
blockchainWrapper.checkTestrpc();

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var app = express();
var router = express.Router();

var allowCrossDomain = function(req, res, next) {
    var headers = 'Cache-Control, Pragma, Origin, X-Requested-With, Content-Type, Accept, Authorization';
    var origin = req.headers.origin;

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', headers);
    res.header('Access-Control-Allow-Credentials', true);

    return next();
}

app.use(bodyParser());
app.use(allowCrossDomain);

var routes = require('./Node/routes.js')(app);

var server = http.createServer(app);
var io = socketio.listen(server);

app.use(express.static(path.resolve(__dirname, 'app')));
var messages = [];
var sockets = [];


io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("TP server listening at", addr.address + ":" + addr.port);
});
