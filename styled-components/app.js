var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var fs = require('fs');

app.set('port', process.env.PORT || '5000');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '')));

var indexFile = express.static(path.join(__dirname, 'dist'), {'index': ['index.html']})
app.use(indexFile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = http.createServer(app);
var boot = function () {
  server.listen(app.get('port'), function(){
    console.info('Express server listening on port ' + app.get('port'));
  });
}
boot();

module.exports = app;
