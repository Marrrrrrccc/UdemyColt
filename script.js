var arr = [];
function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(array) {
  var counter = array[0];
  for (var i = 1; i < array.length; i++) {
    if (counter !== array[i]) {
      return false;
    }
  }
  return true;
}
var a = [];
var result = 0;
function sumArray(a) {
  for (var i = 0; i < a.length; i++) {
    result = result + a[i];
  }
  return result;
}
function sumArray1(arr) {
  var total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
}

function max(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
