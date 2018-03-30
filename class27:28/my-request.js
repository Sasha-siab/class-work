const request = require("request");

request("http://www.omdbapi.com/?apikey=f50f0a1e&t=titanic", function(err, response, body){
	if(!err && response.statusCode == 200){
		console.log(body);
		const actors = JSON.parse(body)["Actors"];
		const released = JSON.parse(body)["Released"];

		console.log(released);
		console.log(actors);
	}
})
