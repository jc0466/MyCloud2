let nPort = 8000;
let sHost = 'localhost';
const myServer = require('./myServer04');
const myRouter = require('./MyRouter3');
const myHandling = require('./MyHandling2');

let handle ={};
handle['/']= myHandling.start;
handle['/start'] = myHandling.start;
handle['/hello'] = myHandling.hello;

myServer.start(nPort, sHost, myRouter.route, handle);