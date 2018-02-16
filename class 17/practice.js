



$("#btn").click(function(){ 
var city = $("#city").val();
 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b', 
  function(data) {
    console.log(data);
    var temp = data["main"]["temp"];
    $("#temp").html(temp);
    var humidity = data["main"]["humidity"];
    $("#humidity").html(humidity);
    var wind = data["wind"] ["speed"];
    $("#wind").html(wind);
    var weather = data["weather"][0];
    console.log(weather.description);
    $("#weather").html(weather.description);
  })
})
