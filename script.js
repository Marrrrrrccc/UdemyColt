var p1display = document.querySelector("#p1Display");
var p2display = document.querySelector("#p2Display");
var button1 = document.querySelector("#p1");
var button2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

button1.addEventListener("click", () => {
  if (!gameOver) {
    p1score++;
    if (p1score === winningScore) {
      gameOver = true;
      p1display.classList.add("winner");
    }
    p1display.textContent = p1score;
  }
});
button2.addEventListener("click", () => {
  if (!gameOver) {
    p2score++;
    if (p2score === winningScore) {
      p2display.classList.add("winner");
      gameOver = true;
    }
    p2display.textContent = p2score;
  }
});

reset.addEventListener("click", () => {
  reseta();
});

numInput.addEventListener("change", () => {
  winningScoreDisplay.textContent = numInput.value;
  winningScore = parseInt(numInput.value, 10);
  reseta();
});
function reseta() {
  p1score = 0;
  p2score = 0;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
  gameOver = false;
}
