//check if JS file is loaded
console.log("script.js is loaded");

//Selectors
const toDoInput = document.querySelector(".taskInput");
const toDoButton = document.querySelector(".addButton");
const toDoList = document.querySelector(".todoList");

const header = document.querySelector("header");
const number = document.createElement("p");


const todoListArray = [];
//console.log(todoListArray); //verify*********

//Event listeners

//toDoButton will check that is something in the textfield and will create a list
toDoButton.addEventListener("click", addingTask);
//checking in which part of the list the user is clicking
toDoList.addEventListener("click", eventClick);

toDoInput.addEventListener("blur", myCounter);

//Functions

function addingTask(event) {
  event.preventDefault();

  //verifying that the text field is no empty
  if (!toDoInput.value) {
    alert("Please type your task");
    return false;
  } else {
    //create a div in HTML
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create list and adding it to the div

    const newTodo = document.createElement("li");
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add("taskItem");
    todoDiv.appendChild(newTodo);

    //create the check button and adding to the div
    const checkButton = document.createElement("button");
    checkButton.innerHTML = "done";
    checkButton.classList.add("doneButton");
    todoDiv.appendChild(checkButton);

    //create the delete button and adding to the div

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.classList.add("deleteButton");
    todoDiv.appendChild(deleteButton);

    //append div to the list we have in HTML
    toDoList.appendChild(todoDiv);

    //adding the task to the Array and display in the console
   
    todoListArray.push(todoDiv);

    console.log(todoListArray);

    //clear the text value for next task
    toDoInput.value = "";
  }

  return true;
}

function eventClick(e) {
  //find which button is clicked

  const buttonOnclicked = e.target;

  if (buttonOnclicked.classList[0] === "deleteButton") {
    //grab the parent of the element we want to delete
    const parent = buttonOnclicked.parentElement;
    parent.remove();

    children = parent.children[0];
  // console.log(children);

    for (let i = 0; i < todoListArray.length; i++) {
      if (parent == todoListArray[i]) {


        //remove one div from the array in that Index
        todoListArray.splice([i], 1);
        console.log(todoListArray);
      }
    }
  }

  if (buttonOnclicked.classList[0] === "doneButton") {
    const parent1 = buttonOnclicked.parentElement;
    parent1.classList.toggle("completed");

    var count = 0;

    for (let i = 0; i < todoListArray.length; i++) {
      if (todoListArray[i].classList == "todo completed") {
        ++count;

        number.textContent = count;
        header.append(number);
      }
    }
  }
}


//this funtion will set the counter to cero everytime that a new task is typed 

function myCounter(){

number.textContent = 0;
  header.append(number);
}
