const express = require('express');
const pug = require('pug');

const app = express();
app.set('view engine', 'pug');

app.get('/home-with-data', (req, res)=>{
	res.render('grocery-list', {
		'groceries': [
		'bananas',
		'milk',
		'lettuce'
		]
	})
})

app.listen(3000, ()=>{
	console.log("working on port 3000...")
})