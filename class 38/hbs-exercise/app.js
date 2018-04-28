const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');

app.get('/home-with-data', (req, res)=>{
	res.render('grocery-list', {
		groceries: [
		'bananas',
		'milk',
		'lettuce'
		]
	})
})

app.listen(3000, ()=>{
	console.log("working on port 3000...")
})