var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

var indexbuffer;
  indexbuffer = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(indexbuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
