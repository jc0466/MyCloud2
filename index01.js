let nPort = 8000;
let sHost = 'localhost';
const myServer = require('./myServer');
const myRouter = require('./myRouter');

myServer.start(nPort, sHost, myRouter.route);