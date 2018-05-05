const express = require('express')
const ejs = require('ejs')
const PORT = process.env.PORT || 3000

const app = express()
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
	res.render('login')
	res.end()
	})


app.listen(PORT, function(){
	console.log('server running on port 3000...')
})