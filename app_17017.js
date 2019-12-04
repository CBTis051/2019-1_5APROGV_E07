var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'application/json; charset=utf-8'});

    res.end('hola mundo Node JS Repo GIT - Bonilla Ulloa Emilly Vernay\n');
}).listen(8081);
console.log('server running on port 8081');