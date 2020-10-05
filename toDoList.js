var toDos = ["Buy New Turtles"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        toDos.forEach(function (todo) {
            console.log(todo);
        });
    } else if (input === "new") {
        var newToDo = prompt("What task would you like to add?");
        toDos.push(newToDo);
    }
    var input = prompt("What would you like to do?");
}
console.log("Ok, You Quit the Application");