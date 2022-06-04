alert("Click OK to start.");
var scoreCount = 0;

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

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

var tArray = [];
for (var i = 1; i < 17; i++) {
  tArray.push("t" + i);
}

tArray = shuffle(tArray);



function lightsRoundOne(tile1) {
  light(tile1)
}
function lightsRoundTwo(tile1, tile2) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
}
function lightsRoundThree(tile1, tile2, tile3) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
}
function lightsRoundFour(tile1, tile2, tile3, tile4) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
}
function lightsRoundFive(tile1, tile2, tile3, tile4, tile5) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
}
function lightsRoundSix(tile1, tile2, tile3, tile4, tile5, tile6) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
}
function lightsRoundSeven(tile1, tile2, tile3, tile4, tile5, tile6, tile7) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
}
function lightsRoundEight(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
}
function lightsRoundNine(tile1, tile2, tile3, tile4, tile5, tile6, tile7,tile9) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
}
function lightsRoundTen(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile9, tile10) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
  delayLight(tile10, 10000);
}
function lightsRoundEleven(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile9, tile10, tile11) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
  delayLight(tile10, 10000);
  delayLight(tile11, 11000);
}
function lightsRoundTwelve(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile9, tile10, tile11, tile12) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
  delayLight(tile10, 10000);
  delayLight(tile11, 11000);
  delayLight(tile12, 12000);
}
function lightsRoundThirteen(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile9, tile10, tile11, tile12, tile13) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
  delayLight(tile10, 10000);
  delayLight(tile11, 11000);
  delayLight(tile12, 12000);
  delayLight(tile13, 13000);
}
function lightsRoundFourteen(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile9, tile10, tile11, tile12, tile13, tile14) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
  delayLight(tile10, 10000);
  delayLight(tile11, 11000);
  delayLight(tile12, 12000);
  delayLight(tile13, 13000);
  delayLight(tile13, 14000);
}
function lightsRoundFifteen(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile9, tile10, tile11, tile12, tile13, tile14, tile15) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
  delayLight(tile10, 10000);
  delayLight(tile11, 11000);
  delayLight(tile12, 12000);
  delayLight(tile13, 13000);
  delayLight(tile12, 14000);
  delayLight(tile13, 15000);
}
function lightsRoundSixteen(tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile9, tile10, tile11, tile12, tile13, tile14, tile15, tile16) {
  delayLight(tile1, 1000);
  delayLight(tile2, 2000);
  delayLight(tile3, 3000);
  delayLight(tile4, 4000);
  delayLight(tile5, 5000);
  delayLight(tile6, 6000);
  delayLight(tile7, 7000);
  delayLight(tile8, 8000);
  delayLight(tile9, 9000);
  delayLight(tile10, 10000);
  delayLight(tile11, 11000);
  delayLight(tile12, 12000);
  delayLight(tile13, 13000);
  delayLight(tile11, 14000);
  delayLight(tile12, 15000);
  delayLight(tile13, 16000);
}

lightsRoundOne(tArray[0]);
var select1 = document.querySelector("." + tArray[0]);
select1.classList.remove("reject");
select1.classList.add("select");
for (var i = 0; i < document.querySelectorAll(".reject").length; i++) {
  document.querySelectorAll(".reject")[i].addEventListener("click", function() {
    alert("Game Over");
  });
}
for (var i = 0; i < document.querySelectorAll(".select").length; i++) {
  document.querySelectorAll(".select")[i].addEventListener("click", function() {
    scoreCount++;
    lightsRoundTwo(tArray[0], tArray[1]);

    select1.classList.remove("select");
    select1.classList.add("done");
    alert('error');

  });
}

for (var i = 0; document.querySelectorAll(".done").length; i++) {
  document.querySelectorAll(".done")[i].addEventListener("click", function() {
    alert("done");
  });
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // var smallArray = [];
// //
// // function processor(array) {
// //
// // }
// //
// //
// //
// //

// function processor() {
//   var tNumber = this.innerHTML;
//   if (tNumber === randomTile1) {
//     light(randomTile1);
//     delayLight(randomTile2, 1000);
//     scoreCount++;
//
//   } else {
//     alert("Game over");
//     alert("here");
//     return;
//   }
//   for (var i = 0; i < document.querySelectorAll(".tiles").length; i++) {
//     document.querySelectorAll(".tiles")[i].removeEventListener("click", processor);
//   }
//
//
//   // function round2 () {
//   // }
//
//   var randomTile3 = "t" + Math.floor((Math.random() * 16) + 1);
//   while (randomTile3 === randomTile1 || randomTile3 === randomTile2) {
//     randomTile3 = "t" + Math.floor((Math.random() * 16) + 1);
//   }
//   for (var i = 0; i < document.querySelectorAll(".tiles").length; i++) {
//     document.querySelectorAll(".tiles")[i].addEventListener("click", function() {
//       var tclick1 = this.innerHTML;
//       alert("reached");
//       if (tclick1 === randomTile1) {
//         for (var i = 0; i < document.querySelectorAll(".tiles").length; i++) {
//           document.querySelectorAll(".tiles")[i].removeEventListener("click", processor);
//         }
//         alert("executed");
//
//       } else {
//         alert("Game Over");
//         alert("hello1");
//         return tclick1;
//       }
//     });
//   }
// }
// if (tclick1 !== randomTile2) {
//   for (var i = 0; i < document.querySelectorAll(".tiles").length; i++) {
//     document.querySelectorAll(".tiles")[i].addEventListener("click", function() {
//       var tclick2 = this.innerHTML;
//       if (tclick2 === randomTile2) {
//         ALERT("EXECUTION101");
//         scoreCount++;
//         light(randomTile1);
//         delayLight(randomTile2, 1000);
//         delayLight(randomTile3, 2000);
//       }
//     })
//   };
// }
// // //
// // // var randomTile1 = "t" + Math.floor((Math.random() * 16) + 1);
// // // var randomTile2 = "t" + Math.floor((Math.random() * 16) + 1);
// // // while (randomTile1 === randomTile2) {
// // //   randomTile2 = "t" + Math.floor((Math.random() * 16) + 1);
// // // }
// // // light(randomTile1);
// // // for (var i = 0; i < document.querySelectorAll(".tiles").length; i++) {
// // //   document.querySelectorAll(".tiles")[i].addEventListener("click", processor);
// // // }
// //
// // // var randomTile3 = "t" + Math.floor((Math.random() * 16) + 1);
// // // while (randomTile1 === randomTile3 && randomTile2 === randomTile3) {
// // //   randomTile3 = "t" + Math.floor((Math.random() * 16) + 1);
// // // }
// // // document.querySelector("." + randomTile1).addEventListener("click", function() {
// // //   var round2t1 = this.innerHTML;
// // //   return round2t1;
// // // });
// // // document.querySelector("." + randomTile2).addEventListener("click", function() {
// // //   var round2t2 = this.innerHTML;
// // //   return round2t2;
// // // });
// // // document.querySelector("." + randomTile3).addEventListener("click", round2);
// //
// //
// //
// //
//
//
//
//
//
// // light("t1");
// // delayLight("t6", 1000);
// // delayLight("t12", 2000);
// // delayLight("t16", 3000);
//
//
//
// // function contains(a, obj) {
// //     for (var i = 0; i < a.length; i++) {
// //         if (a[i] === obj) {
// //             return true;
// //         }
// //     }
// //     return false;
// // }
// //
// // function round1 () {
// //   var litTile = document.querySelector("." +tileNumber);
// //   litTile.classList.add("lightup");
// //   setTimeout(function (){
// //     litTile.classList.remove("lightup");
// //   }, 800);
// //
// //   for (var i = 0; i < document.querySelectorAll(".tiles").length; i++) {
// //     document.querySelectorAll(".tiles")[i].addEventListener("click", function () {
// //         tNumber = this.innerHTML;
// //         console.log(typeof tNumber);
// //
// //         checkScore(createTileVar(), tNumber);
// //     });
// //   }
// // }
// //
// // function round2() {
// //   var tNumber = "";
// //   var tileNumber1 = Math.floor((Math.random() * 16) + 1);
// //   var tileNumber2 = Math.floor((Math.random() * 16) + 1);
// //   while (tileNumber1 === tileNumber2) {
// //     tileNumber2 = Math.floor((Math.random() * 16) + 1);
// //   }
// //   tileNumber1 = "t" + tileNumber1;
// //   tileNumber1 = "t" + tileNumber1;
// //   tString1 = "\n        " + tileNumber1 + "\n      ";
// //   tString1 = "\n        " + tileNumber1 + "\n      ";
// //
// //   var litTile1 = document.querySelector("." + tileNumber1);
// //   litTile.classList.add("lightup");
// //   setTimeout(function (){
// //     litTile.classList.remove("lightup");
// //   }, 800);
// //   var litTile1 = document.querySelector("." + tileNumber1);
// //   litTile.classList.add("lightup");
// //   setTimeout(function (){
// //     litTile.classList.remove("lightup");
// //   }, 800);
// //
// // }
// //
// // round1();
// //
// // function checkScore(tileDisplay, tileInput) {
// //   if (tileDisplay == tileInput) {
// //     scoreCount++;
// //     round2();
// //   }
// //   else {
// //     alert("Game over.");
// //     alert("Total Score is: " + scoreCount);
// //   }
// // }
