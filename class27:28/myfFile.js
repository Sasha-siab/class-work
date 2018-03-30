const request = require("request");

request("http://www.omdbapi.com/?apikey=f50f0a1e&t=titanic", function(err, response, body){
	if(!err && response.statusCode == 200){
		console.log(body);
	}
})
