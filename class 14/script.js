


// CONSTRUCTOR

function Car(color, make, miles, year) {
  this.color = color;
  this.make = make;
  this.miles  = miles;
  this.year = year;
}

var myCar = new Car ("blue", "Honda", 299344, 2004);
console.log(myCar.make);




class Car {
  constructor(color, make, miles, year) {
    this.color = color;
    this.make = make;
    this.miles  = miles;
    this.year = year;
  }
}


class SportsCar extends Car {  // Important
constructor (color, make, miles, year) {
	super(color, make, miles, year) 
		this.doors = 2;
	
}
}


var myCar = new Car ("blue", "Honda", 299344, 2004);
console.log(myCar.make);

var mySportsCar = new SportsCar ( "red", "BMW", 20000, 2017);
console.log(mySportsCar.doors);


class House {
	constructor(doors, windows) {
		this.doors = doors;
		this.windows = windows;
	}
}

class Room  extends House {
	constructor(doors, windows, tables, chairs) {
		super(doors, windows)
		this.tables = tables;
		this.chairs = chairs;
	}
	setTables(newTables) {
		this.tables = newTables;
	}
}

var myHouse = new House (7, 14);
var myRoom = new Room (2, 4, 2, 3);

console.log(myHouse.doors);
console.log(myRoom.chairs);
myRoom.setTables(11111);
console.log(myRoom.tables);



// JQUERY


//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
//</script>   goes before normal js link on the bottom of the body tag
 


$("h1").innerHTML="Change it";   

$("#box").css   // select id 
$(".box").html ("this is a change");  // select class







