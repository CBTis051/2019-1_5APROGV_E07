var http = require('http');
<<<<<<< HEAD
http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    var objeto = {
        mensaje : 'Hola mundo Node JS Repo GIT - Bonilla Ulloa Emilly Vernay\n'
    };

    var json = JSON.stringify(objeto);

    res.end(json);

}).listen(8081);
console.log('Server running on port 8081');
=======
http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'application/json; charset=utf-8'});

    res.end('hola mundo Node JS Repo GIT - Bonilla Ulloa Emilly Vernay\n');
}).listen(8081);
console.log('server running on port 8081');
>>>>>>> d940e3cfd5d6e7fd7cea0cba9fa1a471514dcc9c
