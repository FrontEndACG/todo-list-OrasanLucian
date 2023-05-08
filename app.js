const addBtn = document.getElementById("add-btn");
const toDoInput = document.getElementById("todo-input");
const toDoList = document.getElementById("todo-list");
const noOfToDoContainer = document.getElementById("no-of-todos");
const deleteAllTodosBtn = document.getElementById("delete-all-todos");

toDoInput.addEventListener("input", onTypeTodo);
deleteAllTodosBtn.addEventListener("click", onDeleteAll);
function onTypeTodo(e) {
  console.log(e.target.value);

  if (toDoInput.value != "") {
    addBtn.removeAttribute("disabled");
  } else {
    addBtn.setAttribute("disabled", true);
  }
}

addBtn.addEventListener("click", onAddToDo);
function onAddToDo() {
  if (toDoInput.value.trim() === "") {
    alert("Error:Empty task!");
    toDoInput.value = "";
    addBtn.setAttribute("disabled", true);
    return;
  } else {
    console.log(toDoInput.value);
    const toDoLi = document.createElement("li");
    const spanText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    spanText.innerHTML = toDoInput.value;
    deleteBtn.innerHTML = "X";

    deleteBtn.addEventListener("click", function (e) {
      e.target.parentNode.remove();
      updateNoOfToDos();
    });

    toDoLi.appendChild(spanText);
    toDoLi.appendChild(deleteBtn);
    toDoList.appendChild(toDoLi);

    toDoInput.value = "";
    addBtn.setAttribute("disabled", true);
    updateNoOfToDos();
  }
}

addTodoBtn.addEventListener("click", onAddToDo);
function updateNoOfToDos() {
  const noOfToDos = toDoList.querySelectorAll("li").length;
  noOfToDoContainer.innerHTML =
    noOfToDos + " " + (noOfToDos == 1 ? "ToDo" : "ToDos");
}

function onDeleteAll() {
  console.log("test");
  const allTodos = toDoList.querySelectorAll("li");
  console.log(allTodos);
  allTodos.forEach((toDoLi) => toDoLi.remove());
  updateNoOfToDos();
}
