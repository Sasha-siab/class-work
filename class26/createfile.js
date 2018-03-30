const fs = require('fs');

fs.writeFile("test.txt", "This is node", function(err) {
	if(err){
		console.log(err);
	}else{
		console.log("Filewas created")
	}
})