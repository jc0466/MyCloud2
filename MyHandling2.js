function sleep(milliSec) {
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + milliSec);
}

function start(res) {
 console.log('Request handler \'start\'');
 // Blocking function
 // sleep(10000);
 // Non-blocking function
    setTimeout(function () {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello, hello!');
        res.end();
    }, 10000);    // 10초 기다리고 callback 실행
}

function hello(res) {
 console.log('Request handler \'hello\'');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Hello!');
    res.end();
}

exports.start = start;
exports.hello = hello;
