var color = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var pickColor = pickedColor();
var reset = document.querySelector("#reset");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

reset.addEventListener("click", function () {
  color = generateRandomColors(6);
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
