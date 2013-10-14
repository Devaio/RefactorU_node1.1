
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
	fs.readFile(__dirname + '/index.html', function(err, data){
		res.setHeader('Content-Type', 'text/html')
		res.send(data)
	})
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/hi', function(req, res){
	res.send('<h2>Welcome!</h2>')
})


app.get('/soilwork', function(req, res){
	res.send('<h3>hello again...</h3>')
})

app.get('/happyfuntimes', function(req, res){
	res.send('<h1>whoah! happy fun times?</h1>')
})

app.post('/formsubmit', function(req, res){
	res.redirect('/hi')
})







