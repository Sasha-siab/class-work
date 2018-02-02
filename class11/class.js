console.log("hello");


var h1 = document.createElement("h1");
document.body.appendChild(h1);
h1.innerHTML = "Coding at NYCDA";

var p = document.createElement("p");
document.body.appendChild(p);
p.innerHTML = "This is a paragraph";

var image = document.createElement("img");
document.body.appendChild(image);
image.setAttribute("src", "https://i.ytimg.com/vi/GF60Iuh643I/hqdefault.jpg");

var p2 = document.createElement("p");
document.body.appendChild(p2);
p2.innerHTML = "This is another paragraph";

document.body.insertBefore(p2, image);

var image2 = document.createElement("img");
document.body.appendChild(image2);
image2.setAttribute("src", "http://16391-presscdn-0-53.pagely.netdna-cdn.com/wp-content/uploads/2015/09/funnydogs.jpg");
image2.style.width = "400px";



document.body.style.background = "powderblue";

var btn = document.createElement("button");
document.body.appendChild(btn);
btn.innerHTML = "press me";
btn.style.backgroundColor = "red";


btn.onclick = function(){
image.setAttribute ("src", "https://i.ytimg.com/vi/10dqgKqKxp8/hqdefault.jpg");
}

document.body.insertBefore(btn, image);

// replaceChild (new, old) switching between screens

var ul = document.createElement("ul");
document.body.appendChild(ul);
ul

var li = document.createElement("li");
ul.appendChild(li);
li.innerHTML = "item number 1";

//




  


