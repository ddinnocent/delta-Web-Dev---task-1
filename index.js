
var score = 0;

function light(tileNumber) {
  var litTile = document.querySelector("." + tileNumber);
  litTile.classList.add("lightup");
  setTimeout(function() {
    litTile.classList.remove("lightup");
  }, 1000);
}

function delayLight(tileNumber, timeToStart) {
  setTimeout(function() {
    var litTile = document.querySelector("." + tileNumber);
    litTile.classList.add("lightup");
    setTimeout(function() {
      litTile.classList.remove("lightup");
    }, 1000);
  }, timeToStart);
}

function allTheClicking(j) {
  userArray.push(document.getElementById(array[j]).innerHTML);
  alert("hello, added");
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

var array = [];
for (var i = 1; i < 17; i++) {
  array.push("t" + i);
}
shuffle(array);

light(array[0]);
var computerArray = [];

function createArray(roundNumber) {
  computerArray = array.slice(0, roundNumber);
  return computerArray;
}

createArray(1);

var userArray = [];
document.getElementById(computerArray[0]).onclick = function() {allTheClicking(0)};


delayLight(array[0], 1000);
delayLight(array[1], 2000);

document.getElementById(computerArray[0]).onclick = function() {allTheClicking(0)};
