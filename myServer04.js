const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

function start(route, handle) {
 function onRequest(req, res) {
 console.log('Request received.');
      let sPostData = '';
 let sPathname = url.parse(req.url).pathname;
 console.log('Request for ' + sPathname + ' received.');
 req.setEncoding('utf8');
        // Data chunk가 수신될 때 호출
        req.addListener('data', function (postDataChunk) {
            sPostData += postDataChunk;
            console.log('POST data chunk: ' + postDataChunk);
        });
        // Data chunk 수신이 완료될 때 호출
        req.addListener('end', function () {
 route(sPathname, handle, res, sPostData);
        })
    }
 http.createServer(onRequest).listen(nPort, sHost);
 console.log('Server running at http://' + sHost + ':' + nPort);
}

exports.start = start;


