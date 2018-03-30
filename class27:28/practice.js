const request = require("request");
const http = require("http");
var myMovie;

request("http://www.omdbapi.com/?apikey=f50f0a1e&t=forrest gump", function(err, response, body){
	if(!err && response.statusCode == 200){
		myMovie = JSON.parse(body);
	}
})



http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	var poster = myMovie["Poster"];
	res.write("<img src="+ poster + ">");
	res.write("<br><h1>" + myMovie["Title"]+"</h1> ");
	res.write("<br><h3>" + myMovie["Actors"] +"</h3>");
	res.write("<br><h3>" + myMovie["Released"] +"</h3");

	res.end();
}).listen(8080, function(){
	console.log("Server has started...");
})






