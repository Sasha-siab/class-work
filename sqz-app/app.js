const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();


// const Op = Sequelize.op
const sequelize = new Sequelize('sqz', 'postgres', 'branka123',{
	host: 'localhost',
	port: '5432',
	dialect: 'postgres'
// 	operatorAliases: {
// 	$and: Op.and,
// 	$or: Op.or,
// 	$eq: Op.eq,
// 	$like: Op.like
// }
})


// Create the table
const Hat = sequelize.define('hat',
  {
	name: Sequelize.STRING,
	material: Sequelize.STRING,
	height: Sequelize.INTEGER,
	brim: Sequelize.BOOLEAN
  } 
)




// Check for table and add record
// sequelize.sync()
// .then(()=>Hat.create({
// 	name:'baseball',
// 	material: 'cotton',
// 	height: 2,
// 	brim: true
// }))


//Find all hats
// Hat.findAll().then((hat)=>{
// 	console.log("Love this hat" + hat[0].dataValues.name)
// })

//Find by Id
// Hat.findById(1).then((hat)=>{
// 	console.log("Single hat" + hat.dataValues.name)
// 	console.log("Single hat" + hat.dataValues.height)
// })

// Find  by WHERE

// Hat.findOne({
// 	where: {
// 		brim: true,
// 	}
// })
// .then(function(rows){
	
// 		var columnData = rows.dataValues;
// 		var name = columnData.name;
// 		var material = columnData.material;
// 	    console.log(name, material);

	
// });

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//routes
app.get('/', (req, res)=>{
	Hat.findAll({ order: ['id']}).then((rows)=>{
	return rows;
})
	.then((rows)=>{
		return res.render('superFile', {rows})
	})
})


// Add a hat record to table
app.post('/add', (req, res)=>{
	Hat.create({
		name: req.body.name,
		material: req.body.material,
		height: req.body.height,
		brim: req.body.brim
	})
	.then(row =>{
		return res.redirect('/')
	})
})


//Edit Hat record
app.post('/edit/:id', (req, res)=>{
	let id = req.params.id;
	Hat.findById(id)
	.then(row =>{
		return row
	})
	.then(row =>{
		return res.render('edit-hat', {row})
	})
})


//Update hat record

app.post('/update', (req,res)=>{
	let id = req.body.id
	Hat.findById(id)
	.then((row)=>row.update({
		name: req.body.name,
		material: req.body.material,
		height: req.body.height,
		brim: req.body.brim
	}))
	.then(row =>{
		return res.redirect('/')
	})
})


// Delete hat record

app.post('/delete/:id', (req, res)=>{
	let id = req.params.id
	Hat.findById(id)
	.then(row => row.destroy(row))
	.then(()=>{
		return res.redirect('/')
	})
})



app.listen(8080, ()=>{
	console.log("Sequelize is in effect...")
})

