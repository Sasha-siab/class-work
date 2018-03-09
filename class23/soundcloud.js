
var myPlayer;
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
SC.initialize({
	client_id: "ebe2d1362a92fc057ac484fcfb265049"
});

play.addEventListener("click", function() {
SC.stream("/tracks/322758470").then(function(player){
 // streams the track
 myPlayer = player;
 myPlayer.play();
});
})

pause.addEventListener("click", function() {
	myPlayer.pause();
})
