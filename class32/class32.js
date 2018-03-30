const fs = require("fs");
const http = require("http");

let data2;
let content = '';

let promise = new Promise((resolve,reject)=>{

fs.readFile("./coe.json", "utf-8", function(err, data){
	data2 = JSON.parse(data);
	resolve(data2);
	// for (var i = 0; i < data2.length;  i++) {
	// console.log(data2[i]["image"]);
	// console.log(data2[i]["name"]);
	// console.log(data2[i]["job"]);
	// console.log(data2[i]["born"]);
	// }
	
});

}).then(function(x){
console.log(x.length)
http.createServer(function(req, res) {
	for (var i = 0; i < x.length;  i++) {
		console.log(x[i]["image"])
	content += `<img src='${x[i]["image"]}'/>`;
	content += "<br><h1>" + x[i]["name"]+"</h1> ";
	content += "<br><h3>" + x[i]["job"] +"</h3>";
	content += "<br><h3>" + x[i]["born"] +"</h3>";
	}
	res.writeHead(200, {"content-type": "text/html"});
	res.end(content);

}).listen(8080, function(){
	console.log("Server has started...");
})

})





