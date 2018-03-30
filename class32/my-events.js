const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// myEmitter.on("sometrigger", function(x) {
// 	console.log("Hey! I got heard the trigger " + x.name);
// });

// myEmitter.emit("sometrigger", {name: "John"});


// function jubilee(x) {
// 	console.log("buy me luch for $ " + x.money + " of" + x.food);
// }

// myEmitter.on("buyfood", jubilee);
// myEmitter.emit("buyfood", {money: 10, food: " sandwich"});
// myEmitter.emit("buyfood", {money: 20});

// // ___________________________________________________________

// function mygoal(y) {
// 	console.log("I'd like to become an UX desidgner in " + y.years + " year");

// }

// myEmitter.on("whatyouwant", mygoal);
// myEmitter.emit("whatyouwant", {years: 1});

/// ____________________________________________________________

let packsOfSugar = 0;

function barista() {
 packsOfSugar++;
 console.log(packsOfSugar + "pack(s) of sugar added");
 if(packsOfSugar == 2) {
myEmitter.removeListener("addSugar", barista);
 }
}

myEmitter.on("addSugar", barista);
myEmitter.emit("addSugar");
myEmitter.emit("addSugar");
myEmitter.emit("addSugar");
myEmitter.emit("addSugar");

//____________________________________________

let rings = 0;

function ringing() {
	rings++;
	console.log(rings + " rings happened");
	if( rings == 5) {
		myEmitter.removeListener("calling", ringing);
	}
}

myEmitter.on("calling", ringing);
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");
myEmitter.emit("calling");





// const EventEmitter = require ("events");
// const myEmitter = new EventEmitter();

// function drinks(x) {
// 	if(x.age < 21) {
// 		console.log(x.name + " , you will get an orange juice");
// }else{
// 	console.log(x.name + " , I'll serve you a drink");
// }
// }

// myEmitter.on("serveDrinks", drinks);
// myEmitter.emit("serveDrinks", {name: "Jane", age: 23});
// myEmitter.emit("serveDrinks", {name: "Sasha", age: 17});







