var timer = 60;
var score = 0;
var hitrn = 0;
var correctBubble = new Audio("right.mp3");
var wrongBubble = new Audio("wrong.mp3");

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 0; i < 112; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timeRunner = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerCount").textContent = timer;
    } else {
      clearInterval(timeRunner);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1 style="color: rgb(90, 126, 90);">GAME OVER</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var currentHit = Number(details.target.textContent);

  if (currentHit === hitrn) {
    correctBubble.play();
    increaseScore();
    getNewHit();
    makeBubble();
  } else {
    wrongBubble.play();
  }
});

runTimer();
makeBubble();
getNewHit();
