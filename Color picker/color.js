var numSquares = 6;
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickColor = pickedColor();
var resetButton = document.querySelector("#resetButton");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");
for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click", function () {
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    modeBtn[2].classList.remove("selected");
    this.classList.add("selected");
    if (this.textContent === "Easy") {
      numSquares = 3;
    } else if (this.textContent === "Medium") {
      numSquares = 5;
    } else {
      numSquares = 6;
    }
    reset();
  });
}

function reset() {
  color = generateRandomColors(numSquares);
  pickColor = pickedColor();
  message.textContent = "";
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < squares.length; i++) {
    if (color[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = color[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function () {
  reset();
});
colorDisplay.textContent = pickColor;
for (var i = 0; i < color.length; i++) {
  squares[i].style.backgroundColor = color[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickColor) {
      message.textContent = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = pickColor;
      reset.textContent = "Play again?";
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try again";
    }
  });
}
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickedColor() {
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
