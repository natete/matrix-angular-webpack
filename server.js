var express = require('express');
var app = express();

app.use('/build', express.static(__dirname + '/build'));

app.listen(3000);

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});