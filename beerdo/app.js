var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todos = [
  { _id: '1', text: 'Clean my car'},
  { _id: '2', text: 'Clean my office'},
  { _id: '3', text: 'Clean my house'}
];

/**
* Configuring ExpressJS
*/

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**
* ROUTES
*/

app.get('/', function (req, res) {
  res.render('index.ejs');
});

/**
* API
*/

app.get('/api/todos', function(req, res, next){
  res.send(todos);
});

app.post('/api/todos', function(req, res, next){
  var newTodo = req.body.todo || null;
  
  if(newTodo){
    todos.push({
      _id: todos.length + 1,
      text: newTodo
    });
    res.send(200, todos[todos.length -1])
  }else{
    res.send(500, 'No data sent!');
  }
});

/**
* Initializing server.
*/

var server = app.listen(3000, function () {

  var host = 'localhost';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});