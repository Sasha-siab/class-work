console.log("hello");

var track1 = new Audio("./audio/08_biyo.m4a"); //earth wind and fire, spirit
var track2 = new Audio("./audio/2-02_joy_inside_my_tears.m4a");//st w , songs in the key of life
var track3 = new Audio("./audio/2-07_another_star.m4a");// st w , songs in the key of life
var track4 = new Audio("./audio/02_wipe_ur_mouth.m4a");// demarkus lewis, snazitron EP
//create an array with all Songs
var audioFiles = [track1, track2, track3, track4];

var tracks = document.getElementsByClassName("track");
var titleHolder = document.getElementById("title1");
var artistHolder = document.getElementById("artist1");
var albumHolder = document.getElementById("album1");
var timeHolder = document.getElementById("time1");
// for (let i in audioFiles) {
//  this['MusicItem'+i] = MusicItem( )
// }

var MusicItem = function(music, trackInfo, index) {
  this.music = music;
  this.trackInfo = trackInfo;
  this.index = index;
}

var object0 = new MusicItem(audioFiles[0],tracks[0],0);
var object1 = new MusicItem(audioFiles[1],tracks[1],1);
var object2 = new MusicItem(audioFiles[2],tracks[2],2);
var object3 = new MusicItem(audioFiles[3],tracks[3],3);

var currentlyPlaying;



// ________________________________________PLAY BUTTON

var playButton = document.getElementById("play");
playButton.addEventListener("click", function() {
  if (currentlyPlaying) {
    currentlyPlaying.play();
  }else{
    object0.music.play();
    currentlyPlaying = object0.music;
  }
})


//_________________________________________PAUSE BUTTON

var pauseButton =document.getElementById("pause");
pauseButton.addEventListener("click", function () {
  currentlyPlaying.pause();
})

//_________________________________________STOP BUTTON
//currentlyPlaying from the beggining
var stopButton =document.getElementById("stop");
stopButton.addEventListener("click", function () {
  currentlyPlaying.currentTime = 0;
  currentlyPlaying.pause();
})

//_________________________________________PREV BUTTON

var prevButton =document.getElementById("prev");
prevButton.addEventListener("click", function () {
  currentlyPlaying.pause();
  //make a loop that will take prev item and play it
})


// // ___________________________________________NEXT BUTTON
var nextButton = document.getElementById("next");
nextButton.addEventListener("click", function () {
  if (currentlyPlaying){
    currentlyPlaying.pause();
    currentlyPlaying.currentTime = 0;
  }
  if (trackIndex === 0) {
                trackIndex = tracks.length - 1;
            } else {
                trackIndex = trackIndex - 1;
            }
})

// ___________________________________________CLICK SONGS ITEM
// assign songs data to the box above the player
for (let i in tracks) {
tracks[i].addEventListener("click", function() {
  if (currentlyPlaying) { // check if something is playing
currentlyPlaying.pause(); //stops prev song
  }
title1.innerHTML = tracks[i].innerHTML;
artist1.innerHTML = tracks[i].dataset.artist;
album1.innerHTML = tracks[i].dataset.album;
time1.innerHTML = tracks[i].dataset.time;
window['object'+i].music.play(); //plays
currentlyPlaying = window["object"+i].music; // assigns for manipulating

})
}
