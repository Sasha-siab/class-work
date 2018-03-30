const fs = require("fs");
const country = process.argv[2];
fs.readFile("./countries.json", "utf-8", function(err, data,){
	let data2 = JSON.parse(data);
	console.log(data);
	for (var i = 0; i < data2.length;  i++) {
	if (data2[i]["name"].toLowerCase() == country.toLowerCase()) {
	console.log(data2[i]["name"]);
	console.log(data2[i]["capital"]);
	console.log(data2[i]["population"]);
	console.log(data2[i]["region"]);	
	}	
	}	
})

