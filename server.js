var express = require('express');
var app = express();

app.use(express.static(__dirname + '/www'));
// app.use('/js/libs', express.static(__dirname + '/js'));
// app.use('/assets/css', express.static(__dirname + '/css'));
// app.use('/partials/blog', express.static(__dirname + '/partials'));

app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: __dirname });
});

app.listen('3000');
console.log('working on 3000');