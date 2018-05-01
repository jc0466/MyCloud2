function route(pathname, handle, res) {
    console.log("Routing a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
    handle[pathname](res);
       } else {
    console.log('No handler for ' + pathname);
           res.writeHead(404, { 'Content-Type': 'text/html' });
           res.write('404 not found');
           res.end();
       }
   }
   
   exports.route = route;
   