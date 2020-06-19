var numSquares = 6;
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickColor = pickedColor();
var reset = document.querySelector("#reset");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  color = generateRandomColors(numSquares);
  pickColor = pickedColor();
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < squares.length; i++) {
    if (color[i]) {
      squares[i].style.backgroundColor = color[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  color = generateRandomColors(numSquares);
  pickColor = pickedColor();
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color[i];
    squares[i].style.display = "block";
  }
});
reset.addEventListener("click", function () {
  color = generateRandomColors(numSquares);
  pickColor = pickedColor();
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < color.length; i++) {
    squares[i].style.backgroundColor = color[i];
  }
  h1.style.backgroundColor = "#232323";
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
