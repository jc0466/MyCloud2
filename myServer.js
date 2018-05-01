const http = require('http');
const sHost = 'localhost';
const nPort = 8000;

function start(port, hostname, route, handle) {
let sPostData ='';
 function onRequest(req, res) {
     let sPathname = url.parse(req.url).pathname;
     req.setEncoding('utf-8');
     req.addListener('data', function (dataChunk){
         sPostData += dataChunk;
         console.log('Chunk =)
     }
 }
 res.writeHead(200, { 'Content-Type': 'text/html' });
 res.write('Hello World!');
 res.write('<br>Hello ICE!');
 res.end();
    }
 http.createServer(onRequest).listen(nPort, sHost);
 console.log('Server running at http://' + sHost + ':' + nPort);
}

exports.start = start;
