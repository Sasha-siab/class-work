function Animal(name, legs, age, sound, type){
	this.name = name;
	this.legs = legs;
	this.age = age;
	this.sound = sound;
	this.type = type;
	this.makeSound = function(){
		return this.sound + " " + this.sound;
	}
}


Animal.prototype.owner = function(){
	if(this.type == "cat") {
		return `The owner of ${this.name} is Maria`;
	} else if(this.type == "dog") {
		return `The owner of ${this.name} is Me`;
	} else{
		return "This animal is wild";
	}
}


var myCat = new Animal("Catty", 4, 10, "cat", "meow");

console.log(myCat.name);
console.log(myCat.makeSound());



function Dog() {
	this.breed = " ";
	this.description = function() {
		return `${this.name} is a dog and it's breed is ${this.breed}`;
	}
	Animal.apply(this,arguments);
}

Dog.prototype = new Animal();

var myDog = new Dog ("Branka", 4, 4, "woof", "dog");
myDog.breed = "Dachshund";


console.log(myDog.description());
console.log(myDog.owner());



function Chicken() {
  this.feature = " ";
  this.description = function() {
     return `${this.name}  is a cool thing to have because it makes ${this.feature}`;
  }
  Animal.apply(this,arguments);
}

Chicken.prototype = new Animal();

var notMyDog = new Chicken ("CuttieChicken", 2, 1, "crl-crl", "bird");


notMyDog.feature = "eggs";
 console.log(notMyDog.owner());
console.log(notMyDog.description());

 

 function House(name, doors, windows) {
 	this.name = name;
 	this.doors = doors;
 	this.windows = windows;
 	this.description = function (){
 		return `${this.name} has ${this.doors} doors and ${this.windows} windows`;
 }
}

var myHouse = new House("My House", 10, 15);
console.log(myHouse.name);
console.log(myHouse.description());

function Room() {
	this.tables = 7;
	this.roomDescription = function () {
		return `${this.name} has ${this.tables} tables`;
	}
	House.apply(this, arguments);
}
Room.prototype = new House();
var myRoom = new Room ("My room", 2, 4);
console.log(myRoom.roomDescription());



// EXERCIXE


function Employee(name, age, income) {
this.name = name;
this.age = age;
this.income = income;
this.description = function() {
	return `${this.name} is ${this.age} years old and makes $ ${this.income} a year`;
 }
}

var empOne = new Employee("James", 27, 65000);
console.log(empOne.name);
console.log(empOne.description());

function Developer () {
	this.skills = "coding";
	this.level = "advanced";
	this.experience = "4";
	this.developerDescription = function () {
		return `${this.name} 's skill is ${this.skills} , he is ${this.level} and has ${this.experience} years of experience`; 
	}
Employee.apply(this,arguments);
}
Developer.prototype = new Employee();
var empOne = new Developer ("Ben", 29, 90000);
console.log(empOne.description());
console.log(empOne.developerDescription());




// PRACTICE 

function Employee(name, age, income) {
this.name = name;
this.age = age;
this.income = income;
this.description = function() {
	return `${this.name} is ${this.age} years old and makes $ ${this.income} a year`;
 }
}
var empOne = new Employee("James", 27, 65000);
console.log(empOne.name);
console.log(empOne.description());

function Developer () {
	this.skills = "coding";
	this.level = "advanced";
	this.experience = "4";
	this.developerDescription = function () {
		return `${this.name} 's skill is ${this.skills} , he is ${this.level} and has ${this.experience} years of experience`; 
	}
Employee.apply(this,arguments);
}
Developer.prototype = new Employee();
var empOne = new Developer ("Ben", 29, 90000);
console.log(empOne.description());
console.log(empOne.developerDescription());





function Animal(name, legs, age, sound, type){
this.name = name;
	this.legs = legs;
	this.age = age;
	this.sound = sound;
	this.type = type;
	this.makeSound = function(){
		return this.sound + " " + this.sound;
	}
}
Animal.prototype.owner = function(){
	if(this.type == "cat") {
		return `The owner of ${this.name} is Maria`;
	} else if(this.type == "dog") {
		return `The owner of ${this.name} is Me`;
	} else{
		return "This animal is wild";
	}
}
function Chicken() {
  this.feature = " ";
  this.description = function() {
     return `${this.name}  is a cool thing to have because it makes ${this.feature}`;
  }
  Animal.apply(this,arguments);
}

Chicken.prototype = new Animal();

var notMyDog = new Chicken ("CuttieChicken", 2, 1, "crl-crl", "bird");
notMyDog.feature = "eggs";
 console.log(notMyDog.owner());
console.log(notMyDog.description());




function  Country (name, language, continent, weather) {
	this.cName = cName;
	this.language = language;
	this.continent = continent;
	this.weather = weather;
	this.result = function () {
		return this.name + " is located in " + this.continent  + " and people there mostly speak " + this.language + " you might like to visit the country but be aware that there is " + this.weather;
	}
}
var russia = new Country("Russia", "Russian", "Euroasia", "freaking cold");

console.log(russia.result());


function City() {
	this.special = "  ";
	this.name = name;
	this.cityResult = function () {
		return `${this.name} is located in ${this.cName}  but surprisingly  there is ${this.weather}`;
		City.apply(this,arguments);
	}
}



