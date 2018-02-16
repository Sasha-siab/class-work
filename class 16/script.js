
/// Fahrenheit to Celsius


$("#btn").click(function() {
	let temp = parseInt($("#temp").val());
	let c = (temp - 32 ) * 5/9;
	c = c.toFixed(2); 
	$("#result").html(c);
})

// get data / process data // output data 




 // Calories in drinks 

 $("#drink").change(function(){
 	let drink = $("#drink").val();

 	var drinks = {
 		Wine: 123,
 		Soda: 100,
 		Beer: 180,
 		Water: 0
 	}
 	$("#result2").html(drinks[drink]);
 })



// Bank Loan Calculator 

$("#btn3").click(function(){

	let loan = parseInt($("#loan").val());
	let years = parseInt($("#years").val ());
    var rate = parseInt($("#rate").val()); 
    var rate = rate/100/12;
	var pay = (rate*loan)/(1 - Math.pow((1+rate),(-(years * 12))));
	var pay = pay.toFixed(2);
    $("#pay").val(pay);

})

// PRACTICE 


$(".box1").on("click", function(){
	$(".box1").css("background-color", "blue");
})

$(".box2").on("mouseover", function(){
	$(".box2").css("background-color", "powderblue");
})

$(".box2").on("mouseleave", function(){
	$(".box2").css("background-color", "yellow");
})

$(".box1").on("mouseleave", function(){
	$(".box1").css("background-color", "green");
})

$(".box1").on("dblclick", function(){
	$(".box1").css("background-color", "brown");
})

// $(".box1").on("dblclick", function(){
// 	$(".box1").addClass("bigger");
// })

$(".box1").on("dblclick", function(){
	$(".box1").toggleClass("bigger");
})




// GAME


for(var i = 0; i < 1505; i++) {
	$(".root").append("<div class='box3'></div>");
}

$("div").on("dblclick", function() {
	$("div").off("mouseover");
})

$("div").on("mouseover", function() {
	$(this).css("background", "yellow");
})

$("#my-selection").on("change", function() {
	var myColor = $ ("#my-selection").val();

	$("div").on("mouseover", function(){
		$(this).css("background", myColor);
	})
})



 








