var http = require('http');
http.createServer(function ( req, res){
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});

    res.end('Hola mundo Node JS Repo GIT - Landey Mendoza Melissa\n');
}).listen(8081);
console.log('Server runningon port 8081');