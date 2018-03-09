// let arr = ["one", "two", "three"];

// let person = {
// 	name: "John",
// 	age: 24,
// 	job: "developer"
// }

// for (let i in arr) {
// 	console.log(i);
// }

// for (let i in person) {
// 	console.log(person[i])





// function myFunction(x) {
// 	return (x * 10);
// }

// console.log(myFunction(50));



// function myFunction(x) {
// 	return (x * x);
// }
//  console.log(myFunction(10));
//  console.log(myFunction(3));
//  console.log(myFunction(2));s


// function myFunction (x) {
// 	return x.length * 2;
// }

// console.log(myFunction("world"));

// let number = Math.random() * 10;
// console.log(number);

// let promise = new Promise (function(resolve, reject) {
// 	if (number > 10) {
// 	resolve ("x is greater than 10");
// }else{
// reject ("x is equal or less than 10");
// }
// })
// .then(function(result) {
// console.log(result);
// })
// .catch(function(result) {
// 	console.log(result);
// })



// // _______________________________________USING PROMISE FOR FLASHING LIGHT

// let bulb = document.querySelector("#bulb");

// let lightOnOff = function(){
// let lightOn = new Promise (function(resolve,reject) {
// 	setTimeout (function () {
// 		bulb.style.backgroundColor = "yellow";
// 			bulb.style.opacity = 1;
// 		resolve("lightOn");
// 	}, 1000)
// }) .then (function(result) {
// 	let lightOff = new Promise(function(resolve,reject) {
// 		setTimeout(function() {
// 			bulb.style.backgroundColor = "yellow";
// 			bulb.style.opacity = 0.2;
// 			resolve("lightOff")
// 		}, 1000)
// 	})
// })
// }

// var blinking = setInterval(lightOnOff, 2000);

// __________________________________________________________________________

let promise = new Promise (function(resolve, reject) {
var x = 1;
resolve(x);
})
.then(function(result) {
	var y = result +1;
	return y;
})
.then(function(result) {
	var z =result + 2;
	console.log(z);
})




