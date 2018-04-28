const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const {Client} = require('pg');
const dotenv = require('dotenv')

dotenv.load();
const postgres_user = process.env.DB_USER;
const postgres_pass = process.env.DB_PASS;





const connectionString = 'postgresql://postgres:branka123@localhost:5432/school'
 
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.set('view engine', 'ejs');



// to get all students info

app.get('/', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query ('SELECT * FROM students')
})
.then((result)=>{
	return res.render('students', {result})
})
})

// to delete student  

app.post('/delete/student/:id', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query ('DELETE FROM students WHERE id=$1', [req.params.id])
})
.then((result)=>{
	return res.redirect('/')
})
})



// to add student 

app.post('/add', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query (`INSERT INTO students (name, email) values ($1, $2)`, [req.body.name, req.body.email])
})
.then((result)=>{
	return res.redirect('/')
})
})


// to edit information

app.get('/edit/student/:id', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query (`SELECT * FROM students WHERE id=$1`, [req.params.id])
})
.then((result)=>{
	return res.render('edit-student', {result})
  })
})

// to update information

app.post('/update', (req, res)=>{
	const client = new Client({
		connectionString: connectionString,
	})
client.connect()
.then(()=>{
	return client.query (`UPDATE students SET name=$1, email=$2 WHERE id=$3`, [req.body.name, req.body.email, req.body.id])
})
.then((result)=>{
	return res.redirect('/')
  })
})









app.listen(3000, ()=>{
	console.log('running on port 3000....');
})


