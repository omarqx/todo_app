const form = document.querySelector("form");
const toDoList = document.querySelector("#to-do-list");


//listener event when 'Add' submit button is clicked
form.addEventListener("submit", function(event) {
    //must prevent form from exeucting default action
    event.preventDefault();
    const newToDoInput = document.querySelector("#to-do");
    
    const newToDo = document.createElement("li");
    const newDoneButton = document.createElement("button");
    const newDeleteButton = document.createElement("button");
    
    newToDo.innerText = newToDoInput.value;
    newDoneButton.innerText = "Done";
    newDeleteButton.innerText = "Delete";

    //listener event whe 'Delete' is clicked
    //removes parent element
    //must use event delegation to ensure all to-dos are deleted
    newDeleteButton.addEventListener("click", function(event) {
        event.target.parentElement.remove();
    });
    
    //listener event when 'Done' button is clicked
    //change text style to strikethrough
    newDoneButton.addEventListener("click", function(event) {
        event.target.parentElement.style.textDecoration = "line-through";
    });

    //appends the new to-do to the top of the list
    newToDo.append(newDoneButton);
    newToDo.append(newDeleteButton);
    toDoList.append(newToDo);
    form.reset();

    //adds to localStorage
    savedToDos.push({ task : newToDo.innerText, isDone : false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
})  


//add to local storage
// localStorage.getItem


//retrieve from localStorage
// const savedToDos = JSON.parse(localStorage.getItem("toDoList")) || [];
// for (todo of ToDoList) {
//     let newToDo = document.createElement("li");
//     newToDo.innerText = savedTodos[todo].task;
//     newTodo.isDone = savedTodos[i].isCompleted ? true : false;
//   if (newTodo.isDone) {
//     newTodo.style.textDecoration = "line-through";
//   }
//   todoList.appendChild(newTodo);
// }

// const list = [];
// //example of todo list item
// const entryOne = { task : 'task' , isCompleted :  false };
// list.push(entryOne);
// localStorage.setItem("todoList" , JSON.stringify(list));
//task, completion status


//console.log(localStorage.getItem("todoList"));