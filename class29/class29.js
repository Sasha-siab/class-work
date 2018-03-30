// const x = process.argv[2];
// console.log(x.split("").reverse().join(""));





const fs = require("fs");
fs.readFile("person.json", "utf-8", function(err,data){
	let data2 = JSON.parse(data);
	console.log(data2[1]["name"] + " is a " + data2[1]["job"]);
});




