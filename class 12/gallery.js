var george = {
  fname: "George",
  lname: "Clooney",
  age: 56,
  height: "5ft 11in",
  url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/George_Clooney_2016.jpg"
}
var jane = {
  fname: "Jane",
  lname: "Seymour",
  age: 66,
  height: "5ft 3in",
  url: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzY2NDk3Mjk0/jane-seymour-9542468-1-402.jpg"
}
var halle = {
  fname: "Halle",
  lname: "Berry",
  age: 51,
  height: "5ft 5in",
  url: "https://www.biography.com/.image/t_share/MTE1ODA0OTcxODYxNjQwNzE3/halle-berry-9542339-1-402.jpg"
}
var brad = {
  fname: "Brad",
  lname: "Pitt",
  age: 54,
  height: "5ft 11in",
  url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brad_Pitt_Fury_2014.jpg"
}


var p = document.getElementById("root");
var people = [george, jane, halle, brad];

for(
  var i = 0;  i < people.length; i++){
  let  h1 = document.createElement('h1');
  let p = document.createElement('p');
  let img = document.createElement('img');
  let div = document.createElement ('div');
  
  h1.innerHTML = people[i].fname + people[i].lname;
  p.innerHTML = people[i].age + people[i].height;
  img.setAttribute('src', people[i].url);
  img.style.width = "100px";
  
  document.body.appendChild(div);
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(p);



// var p = document.getElementById("root");
// var people = [george, jane, halle, brad];
// for(let i=0; i < people.length; i++){
// p.innerHTML += "<img style='width:100px'src='"+ people[i].url +"'><br>" + people[i].fname + "<br>" + people[i].lname + "<br>" + people[i].age + "<br>" + people[i].height + "<b>" +  "<br>";
  
// }