var toDos = ["Buy New Turtles"];
var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log("**********");
        toDos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("**********");
    } else if (input === "new") {
        var newToDo = prompt("What task would you like to add?");
        toDos.push(newToDo);
        alert("Added To Do");
    } else if (input === "delete") {
        var index = prompt("Enter index of todo to delete");
        toDos.splice(index, 1);
        alert("Deleted To Do");
    }
    var input = prompt("What would you like to do?");
}
console.log("Ok, You Quit the Application");