const vid = document.getElementById("myVideo");
const span = document.getElementsByTagName('span');

for (let i = 0; i < span.length; i += 1) {
vid.addEventListener ('ontimeupdate' () => {
  vid.currentTime = span[i].style.color
}
});

// Assign an ontimeupdate event to the <video> element, and execute a function if the current playback position has changed
vid.ontimeupdate = function() {myFunction()};

function myFunction() {
// Display the current position of the video in a <p> element with id="demo"
    document.getElementById("demo").innerHTML = vid.currentTime;

vid.addEventListener ()
