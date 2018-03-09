//----Output "even" or "odd"----


let evenOrOdd = function(num){
 (num % 2 == 0) ? console.log("even") : console.log("odd")
}
evenOrOdd(92)
evenOrOdd(93)



//-----------Output "John is 24 years old" -------

let person = {
 name: "John",
 age: 24
}
function personDescription(obj){
 return `${obj.name} is ${obj.age} years old`;
}
console.log(personDescription(person));


//-------------Countdown from 10 to 0 every second --------------

let count = 10;
function countDownToTen(){
 return count--
}

var start = setInterval(function(){
 console.log(countDownToTen());
},1000)

setTimeout(function(){
 clearInterval(start);
}, 11000)



//---------Output 'This Ford truck has 2 doors'----

let Cars = [
 {
   name: 'Nissan',
   types: 'sedan',
   doors: 4
 },
  {
   name: 'Ford',
   types: ['sedan', 'truck', 'suv'],
   doors: [2, 4]
 },
  {
   name: 'Nissan',
   types: 'sedan',
   doors: 4
 },
]
console.log(`This ${Cars[1].name} ${Cars[1].types[1]} has ${Cars[1].doors[0]} doors`)



















