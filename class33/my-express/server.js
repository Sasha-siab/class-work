const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// app.get('/hello/:name', function(req, res) {
// 	res.send(`Hello ${req.params.name}`);
// })

// app.get (["/apple", "/ale"], function(req, res) {
// 	res.send(`Apple or Ale`);
// })



// app.get (["/who+a"], function(req, res) {
// 	res.send(`I know, right?`);
// })


// app.get ("/:palindrome", function(req, res) {
// 	let word = req.params.palindrome;
// 	let wordReversed = word.split("").reverse().join("");

// 	res.send(wordReversed);
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.post('/login', function(req, res) {
	res.send(req.body.username);
})

app.get('/', function(req, res) {
	res.send(`${req.query.name} ${req.query.age}`)
	console.log(req.query)
})


app.listen(3000, function() {
	console.log ("Server started on port 3000")
})