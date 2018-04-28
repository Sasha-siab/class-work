const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

// app.get(['/food', '/music'], (req, res)=>{
// 	res.send('Hmmmmm...I like food and music')
// })

// app.get(, ('/hu+ge+', req, res)=>{
// 	res.send('Is this from our president')
// })

// app.get('/:name', (req, res)=>{
// 	res.send(`Hello, President ${req.params.name}`)
// })


// app.get('/:name', (req, res)=>{
// 	res.send(`${req.params.name}`.toUpperCase())
// })


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

let arr = [];


app.post('/login', (req,res)=>{
	res.send(req.body)
	let data = req.body;
	arr.push(data);
	let arr2 = JSON.stringify(arr);
	fs.writeFile('db.txt', arr2, (err)=>{
		console.log("Data added")
	})
})

app.listen(3000, ()=>{
	console.log('server started on port 3000...')
})