console.log("test of spelling");
var express = require("express");

var app = express();

app.get("/hello/world", function(request, response) {
	console.log("got request for '/hello/world'");
	response.send("hello there");
});

app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
})