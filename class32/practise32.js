// function makeCall(contactInfo, isPhoneCharged, callback) {
// 	if(!isPhoneCharged) {
// 		callback("You need to charge your phone");
// 	}else if(contactInfo !=="911") {
// 		callback("You need the emergency number");
// 	}else{
// 		setTimeout(function() {
// 			callback("Calling 911...");
// 		}, 1000)
// 	}
// }

// makeCall("911", true, function(message){
// 	console.log(message);




function concertPass (age, haveTicket, callback) {
	if (age < 18) {
		callback("Stop acting so grown");
	}else if(!haveTicket){
		callback("please buy a ticket");
	}else{
		callback("Please enter and take a seat");
	}
}

// function gateCheck(message) {
// 	console.log(message);
// }

// concertPass(21, true, gateCheck);

concertPass(21, true, function(message){
	console.log(message)
})