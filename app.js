var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var email = require('./routes/email');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/email', email);

app.get('*', function(req, res){
  res.redirect('/')
});


//alternatively -> npm start
app.listen(8080, () => console.log('ArtDapp listening on port 8080!'))

module.exports = app;
