var t = {
	name: "tom",
	age:  28
}

console.log(t.name);
console.log(t.age);
console.log(t["name"]);

var m = {
  name: "mary",
  age:  30
}

console.log(m.name);


// OBJECT CONSTRUCTOR

// CAR CONSTRUCTOR

function Car(brand, wheels, year) {
  this.brand = brand;
  this.wheels = wheels;
  this.year = year;
}
var a = new Car("honda", 4, 2004);

console.log(a.year);
console.log(a.brand);
console.log(a.wheels);



// PERSON + PROTOTYPE

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.description = function(){
    return this.name + " " + age;
  }
}
var z = new Person("Sasha", 26);

console.log(z.name);
console.log(z.age);
console.log(z.description());

Person.prototype.student = true;
console.log(z.student);

z.student = false;
console.log(z.student);

Person.prototype.testing_prototype = function(){
  return "this person's name " + this.name;
}
console.log(z.testing_prototype());

Person.prototype.gender = "female";
console.log (z.gender);

Person.prototype.user_gender = function(){
  return "this person's gender is " + z.gender;
}
console.log(z.user_gender());

Person.prototype.amount_of_sleep = "not enough";
console.log(z.amount_of_sleep);

Person.prototype.look = function () {
  return this.name + " looks like she slept " + z.amount_of_sleep;
  
}
console.log(z.look());






var b = new Person("Ben", 26);
var c = new Person("Kate", 16);
console.log(b.name);

var p = document.getElementById("root");


var people = [z, b,c];

for(let i=0; i < people.length; i++){
  p.innerHTML += people[i].name + " " + people[i].age + "<br>";
}



var p = document.getElementById("root");
var people = [george, jane, halle, brad];
for(let i=0; i < people.length; i++){
p.innerHTML += "<img style='width:100px'src='"+ people[i].url +"'><br>" + people[i].fname + "<br>" + people[i].lname + "<br>" + people[i].age + "<br>" + people[i].height + "<b>" +  "<br>";
  
}



