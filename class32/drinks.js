

// ______________________________________

const EventEmitter = require ("events");
const myEmitter = new EventEmitter();

function greetings (x) {
	if (x.age < 18) {
		console.log ("Hey, baby " + x.name + " . The kids table is over there.");
	}else{
		console.log("Hello " + x.name + " and Welcome to the party");
	}
}




myEmitter.on("doorbell", greetings);


myEmitter.emit("doorbell", {name: "Joe", age: 16});
myEmitter.emit("doorbell", {name: "Sasha", age: 23});




// ______________________________________ 


const EventEmitter = require ("events");
const myEmitter = new EventEmitter();

function greetings (x) {
	if (x.age < 18) {
		console.log ("Hey, baby " + x.name + " . The kids table is over there.");
	}else{
		console.log("Hello " + x.name + " and Welcome to the party");
	}
}




myEmitter.on("doorbell", greetings);


myEmitter.emit("doorbell", {name: "Bob", age: 16});
myEmitter.emit("doorbell", {name: "Sasha", age: 23});


