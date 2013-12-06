var http = require('http');
var ecstatic = require('ecstatic');
var fs = require('fs');

var staticd = ecstatic({
    root: __dirname + '/static',
    autoIndex: true
});

var server = http.createServer(function(req, res) {
    return staticd(req, res);
});

server.listen(process.env.PORT || 3000);