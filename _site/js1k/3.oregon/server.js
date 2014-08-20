/**
* JS1K Very simple node.js server.
*/

var http = require('http')
    , fs = require('fs')
    , paperboy = require('paperboy')
  , path = require('path')
//  , io = require('socket.io')
  , url = require('url')
  , sys = require(process.binding('natives').util ? 'util' : 'sys')
  , server;
  
WEBROOT = path.dirname(__filename);

server = http.createServer(function (req, res) {
    // Paperboy delivers static content.
    paperboy
	.deliver(WEBROOT, req, res)
	.addHeader('Cache-Control', 'no-cache');
});

// JS1K... so port 1000
server.listen(1000);
