const http = require('http');
const sHost = 'localhost';
const nPort = 8000;

function start() {
function onRequest(req, res) {
 console.log('Request received.');
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.write('Hello World!');
 res.write('<br>Hello ICE!');
 res.end();
    }
 http.createServer(onRequest).listen(nPort, sHost);
 console.log('Server running at http://' + sHost + ':' + nPort);
}

exports.start = start;
