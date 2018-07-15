var http = require('http');
var port = 8080
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello Internet! Version 0!');
};
var www = http.createServer(handleRequest);
console.log('Listening on http://localhost:' + port);
www.listen(port);