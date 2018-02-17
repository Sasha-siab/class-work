
console.log("hello");

$("#btn").click(function(){
// $("#span").text("");
	var movie = $("#title").val();
	$.getJSON('http://www.omdbapi.com/?apikey=60f7bdd3&t=' + movie,
		function (data) {
			console.log(data);
			var poster = data["Poster"];
			var title = data["Title"];
			var year = data["Year"];
			var runtime = data["Runtime"];
			var rated = data["Rated"];
			var genre = data["Genre"];
			$("#poster").attr("src" , poster);
			$("#year").html(year);
			$("#runtime").html(runtime);
			$("#rated").html(rated);
			$("#genre").html(genre);

		})
})



