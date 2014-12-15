var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var beers = [
    { name: "Bourboun County Brand Stout", rating: "4.5", style: "Imperial Stout", abv: "2%", yours: "Rate this beer?" },
    { name: "Shrek", rating: "5", style: "Swamp", abv: "100%", yours: "Rate this beer?" },
    { name: "Donkey", rating: "3.5", style: "Eddie Murphey", abv: "20%", yours: "Rate this beer?" },
    { name: "Katniss Everdeen", rating: "4", style: "Lager", abv: "2.2%", yours: "Rate this beer?" },
    { name: "Dennis Pitta", rating: "2", style: "Injured", abv: "15.2%", yours: "Rate this beer?" }
];
/**
*	Configuring Express
*/
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**
*	Routes
*/
app.get('/', function (req, res) {
  res.render('index.ejs');
});

/**
*	API
*/
 app.get('/api/getbeers', function(req, res, next){
 	res.send(beers);
 });

// app.post('/api/todos', function(req, res, next){
// 	var newTodo = req.body.todo || null;
// 	if (newTodo){
// 		todos.push({
// 			_id: todos.length + 1,
// 			text: newTodo
// 		});
// 		res.send(200, todos[todos.length - 1]);
// 	} else {
// 		res.send(500, 'No data sent!');
// 	}
// });

/**
*	Initializing Server
*/ 
var server = app.listen(3000, function () {

  var host = 'localhost';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});