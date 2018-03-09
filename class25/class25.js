// Quick Drills for 3/8/2018
//---------Output the result of a number raised to the power of x ----
// for example: 3 to the power 2, is 9.   3 to the power 3, is 27.

function numToThePower(x,y){
 return Math.pow(x, y);
}
console.log(numToThePower(3,3));


//---------Output "YORK" from "NEW YORK"-------------

let strA = "NEW YORK";
let partStr = strA.substr(4);
console.log(partStr);


//-------------Output last item from an array--------------
//-------------e.g. last letter "E" from ["H", "O", "M", "E"]-----------

let arrA = ["H", "O", "M", "E"];
const findLast = (x) => {
 let y = x.pop();
 return y;
}
console.log(findLast(arrA));


//---------Output Ascending string every sec------

/*
x
xx
xxx
xxxx
etc...
*/

let countUp = 0;
function showIncreasingStr(str){
 countUp++;
 return str.repeat(countUp);
}

var startUp = setInterval(function(){
 console.log(showIncreasingStr("x"));
}, 1000);

setTimeout(function(){
 clearInterval(startUp);
}, 10000);



// 
let ops = process.argv[2];
let num1 = parseInt(process.argv[3]);
let num2 = parseInt(process.argv[4]);
if(ops === "add"){ 
    console.log(num1 + num2);
}
if(ops === "subtract"){
    console.log(num1 - num2);
}



