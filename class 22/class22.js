


// var arr1 = ["cat", "dog", "bird", "mouse"];
// function myArr (x) {
// 	return x.length;
// }

// console.log(myArr(arr1));



// var str1 = ("hello my pretty friend");
 
//  function try1 (x) {
//  	return x.toUpperCase();
//  }
// 	console.log(try1(str1));



// var arr2 = ["home", "products", "services"];

// console.log(arr2.map(try1));



// function myFunction (x) {
// 	var result = [];
// 	for (let i = 0; i < x.length;  i++) {
// 		x[i] = x[i].toUpperCase();
// 		result.push(x[i]);
	
// }
// return result;
// }
// console.log(myFunction(arr2));

// ES6 
// map ()
// console.log(...arr2); spreads items 


// PROMISES



// let promise1 = new Promise (function(resolve,reject) {
// 	var x = 2+3;
// 	resolve (x);
// 	reject ("error");
// }) .then (function(result) {

// 	var y = result * 2;
// 	console.log(y);
// }) .catch("opps,something went wrong") {
// 	console.log(result);
// }






// var promise = Promise.reject( new Error("uh oh"));

// promise.catch(function(err){
// 	console.log(err);
// });



// var coolcity = new Promise(function(resolve,reject) {
// 	var x = "NYC";
// 	resolve(x);
// })
// .then(function(result) {
// 	var y = result + " is a";
// 	return y;
// });
// .then(function(result) {
// 	var z = result + " cool city";
// // 	console.log(z);
// // });





// var mypromise = new Promise (function(resolve) {
// 	var x = 1000;
// 	resolve (x);
// })
// .then(function(result) {
// 	var y = result - 200;
// 	return y;
// })
// .then(function(result) {
// 	var z = result + 300;
// 	console.log(z);
// })






// var mypromise = new Promise (function(resolve) {
// 	var x = 1000;
// 	resolve (x);
// })
// .then(function(result) {
// 	var y = result - 200;
// 	return y;
// })
// .then(function(result) {
// 	var z = result + 300;
// 	console.log(z);
// })




let mario = Math.random() * 10;



var myPromise = new Promise ( function(resolve, reject) {
	if (mario > 4)
	resolve ("true");
	reject ("false");
	console.log(mario);

})
.then(function(result) {
	console.log("this number is greater than 4");
})
.catch(function(resolve) {
	console.log("this number less than 4");
})
















