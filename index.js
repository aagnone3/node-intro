var http = require('http');
var url = require('url');
var querystring = require('querystring');
var dt = require('./module');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The URL is " + req.url + "\n");
    var url_parts = url.parse(req.url, true).query;
    res.write("a is " + url_parts.a + " and b is " + url_parts.b);
    console.log(querystring.stringify(url_parts, ';'));
    //url_parts.forEach(function (k, v) {
    //    res.write(k + ", " + v);
    //});
    res.write("The date is " + dt.getDate() + "\n");
    res.end();
});
server.listen(8080);
