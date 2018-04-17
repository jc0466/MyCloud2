let nPort = 8000;
let sHost = 'localhost';
const myServer = require('./myServer');
const myRouter = require('./myRouter');
const myHandling = require('./myHandling');

let handle ={};
handle['/']= myHandling.start;
handle['/start'] = myHandling.start;
handle['/hello'] = myHandling.hello;

myServer.start(nPort, sHost, myRouter.route, handle);