let nPort = 8000;
let sHost = 'localhost';
const myServer = require('./myServer4');
const myRouter = require('./myRouter2');
const myHandling = require('./myHandling3');

let handle ={};
handle['/']= myHandling.start;
handle['/start'] = myHandling.start;
handle['/hello'] = myHandling.hello;

myServer.start(nPort, sHost, myRouter.route, handle);