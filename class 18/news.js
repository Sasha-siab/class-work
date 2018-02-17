

var apiKey = 'eb3295bf087d4f4482a83843d267ae7f'  // my api key for News API
 $.getJSON('https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=' + apiKey, 
  function(data) {
    console.log(data);

for(var i = 0; i < data.articles.length; i++) {
	console.log(data.articles.length);

    var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];

    $(".all-news-articles").append(
        author + "<br>" +
        title + "<br>" +
        content + "<br>" +
        date + "<br>" +
        "<img src="+ pic + ">" + "<br>" + "<hr>"
        )
}
  })
