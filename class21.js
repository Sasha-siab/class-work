// var a = 50;
// var b = 70;

// function diff (a,b) {
// 	return Math.abs(a - b);

// }

// console.log(diff(a,b));


// function myString (x) {
// 	var str = "";
// 	for (let i = 0; i < 10; i++) {
// 		str = str + x + "\n" ;
// 	}
// 	return str;
// }


// console.log(myString("**********"));




// function mySting2 (x) {
// 	var str = "";
// 	for (let i = 0; i < 10; i++) {
// 		str = str + "\n";
// 		for (let j = 0;  j < 10; j++){
// 			str =  str + x;
// 		}

// 	}
// 		return str;
// }

// console.log(mySting2("*"));



// function mySting2 (x) {
// 	var str = "";
// 	for (let i = 1; i < 10; i++) {
// 		str = str + "\n";
// 		for (let j = 0; j < i; j++) {
// 			str = str + x;
// 		}

// 	}
// 		return str;
// }

// console.log(mySting2("*"));



// _________________________________________________promises


var promise = new Promise(function(resolve, reject) {
// after humps waiting a second
setTimeout(function () {
	resolve("hello world");
}, 1000);
});

promise.then(function(result){
	console.log(result);
})



var promise = new Promise(function(resolve, reject) {
// after humps waiting a second
setTimeout(function () {
	reject("something went wrong");
}, 3000);
});

promise.catch(function(reject){
	console.log(reject);
});


















