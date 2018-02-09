$("h1").hide(2000);

$("h1").show(1000);

$("img").slideUp(1500);

$("img").slideDown(1500);



$("p").fadeOut(3000);
$("p").fadeIn(2000);


$("body").css("background-color", "powderblue")

$("h1").css({
	color:"blue",
	backgroundColor: "pink",
	textAlign: "center"
})

$(document).click(function(){
	$("body").css("background-color", "gray");
	$("img").attr("src", "https://i.imgflip.com/72f6y.jpg");
	$("h1").append( " bla bla ");

$("body").animate({
	opacity: 0.5,
	width: "200px"}, 2000)
})





