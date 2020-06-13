var todos = [];
var input = prompt("What would you like to do");

while (input !== "quit") {
  if (input === "list") {
    list();
  } else if (input === "new") {
    add();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do");
}
console.log("Ok, you quit the app");
function list() {
  todos.forEach((element, i) => {
    console.log(i + ": " + element);
  });
}
function add() {
  var newTodo = prompt("Enter new to do");
  todos.push(newTodo);
}
function deleteTodo() {
  var index = prompt("What you wanna delete?");
  todos.splice(index, 1);
  console.log("deleted todo");
}
