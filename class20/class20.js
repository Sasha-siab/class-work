// // FUNCTIONS / LOOPS / OBJECTS / LOGIC / ARRAYS

// //___________________________________________ finding even or odd numbers




// function checkEvenOrOdd(x) {   
// 	if(x % 2 === 0) {
// 		return "Number is even"
// 	}else{
// 		return "Number is odd"
// 	}
// }

// console.log(checkEvenOrOdd(17));
// console.log(checkEvenOrOdd(4));



// // ___________________________________________finding the sum of an array


// var arr1 = [3, 6, 7, 14];
// var arr2 = [ 45, 65, 3, 8];


// var sum = function(x) {  // x represents an array  // input
// 	let total = 0;
// 	for(let i = 0; i < x.length; i++){
// 		total = total + x[i];
// 	}
// 	return total; // output
// }

// console.log(sum(arr1));
// console.log(sum(arr2));


// // _________________________________________finding the average of an array


// var avg = function(x) {
// 	return sum(x) / x.length; // using sum from previos example
// }

// // var avg = (x) => {return sum(x) / x.lendth};  (alternative way to do it)

// console.log(avg(arr1));
// console.log(avg(arr2));


// // _________________________________________finding the maximum of an array

// var findMax = function(x) {
// 	var max = x[0]; 
//     for (let i = 1; i < x.length; i++) {
// 		if(max < x[i]){
// 			max = x[i];
// 		}
// 	}
// 	return max;
// }

// console.log(findMax(arr1));


// // _________________________________________finding the minimum of an array

// var findMin = function(x) {
// 	var min = x[0]; 
//     for (let i = 1; i > x.length; i++) {
// 		if(min < x[i]){
// 			min = x[i];
// 		}
// 	}
// 	return min;
// }

// console.log(findMin(arr1));



// //________________________________ finding numbers that equal or less than 20


// var arr3 = [3, 8, 34, 20, 45];
// var list = []; // creating an empty array

// function findMe(x) {
//     var y = 20;
//     for ( let i = 0; i < x.length; i++) {
//     	 if (y >=  x[i]) {
//     	list.push(x[i]);   // check the result and if true add to the empty array  
//     }
//     }
// return list;   
// }

// console.log(findMe(arr3));


// // //________________________________ finding numbers  less than 40 and greater than 10


// var arr3 = [3, 8, 34, 20, 45];
// var result = []; // creating an empty array

// function findMe2(x) {
//     var y = 40;
//     var z = 10;
//     for ( let i = 0; i < x.length; i++) {
//     	 if (y >  x[i] && z < x[i]) {
//     	result.push(x[i]);   // check the result and if true add to the empty array  
//     }
//     }
// return result;   
// }

// console.log(findMe2(arr3));


// // || double pipe ( or )
// // && double ampersand ( and )


// // ____________________________________________________________objects

// var thd = "third";
// var cars = {
// 	first: "nissan",
// 	second: "toyota",
// 	third: "honda"
// }

// console.log(cars.second);
// console.log(cars["second"]);


// console.log(cars[thd]);



// //____________________________________________________________time

// function delayMe(){
// 	console.log("I'm late, sorry");
// }

// setTimeout(delayMe, 2000)    // after this time the function will perform
// setInterval(delayMe, 2000)   // runs the function every 2 sec, needs to be killed


//____________________________________________________________time practice

function delayMe2(){
	$("#light").fadeOut(1000);
	$("#light").fadeIn(1000);

}
setInterval(delayMe2, 1000)






