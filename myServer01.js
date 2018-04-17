const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

function start(route) {
 function onRequest(req, res) {
 console.log('Request received.');
 let sPathname = url.parse(req.url).pathname;
 console.log('Request for ' + sPathname + ' received.');
        route(sPathname);
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.write('Hello World!');
 res.write('<br>Hello ICE!');
 res.end();
    }
 http.createServer(onRequest).listen(nPort, sHost);
 console.log('Server running at http://' + sHost + ':' + nPort);
}

exports.start = start;
