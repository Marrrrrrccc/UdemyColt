age = 16;
if (age < 0) {
  console.log("Negative");
} else if (age === 21) {
  console.log("21");
} else if (age % 2 === 1) {
  console.log("odd");
} else if (age % Math.sqrt(age) === 0) {
  console.log("Perfect square");
}
