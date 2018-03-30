


function bartender (drinkType, hasIce, callback) {
	if (!drinkType) {
		callback("There is an error");
	}else if(drinkType === "lemonade" && !hasIce) {
		callback("The lemonade requares ice!");
	}else{
		setTimeout(function() {
			callback ("... making drink...");
		}, 1000)
	}
}

// bartender("lemonade", true, function(message){
// 	console.log(message)

// })


bartender("lemonade", false, function(message){
	console.log(message)

})