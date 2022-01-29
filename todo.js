const todo = document.querySelector("#todo");
const todoInput = todo.querySelector("input");
const todoList = document.querySelector("#todo_list");

let todos = [];

function loadTodos() {
  if (localStorage["todos"] !== undefined) {
    todos = JSON.parse(localStorage["todos"]);
  }

  todos.forEach((value) => paintTodo(value));

  if (todoList.childElementCount > 0) {
    todoList.classList.remove("hidden");
  } else {
    todoList.classList.add("hidden");
  }
}

function paintTodo(todo) {
  const todoElement = document.createElement("li");
  todoElement.style = "color: #F7F7F7";
  todoElement.innerText = todo;
  const removeElement = document.createElement("button");
  removeElement.classList.add("mdc-icon-button", "material-icons");
  removeElement.innerText = "delete";
  removeElement.addEventListener("click", () => {
    const index = todos.indexOf(todo);
    if (index > -1) {
      todoElement.remove();
      todos.splice(index, 1);
      saveTodos();
    }
  });
  todoElement.appendChild(removeElement);
  todoList.appendChild(todoElement);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));

  if (todoList.childElementCount > 0) {
    todoList.classList.remove("hidden");
  } else {
    todoList.classList.add("hidden");
  }
}

loadTodos();

todo.addEventListener("submit", (event) => {
  event.preventDefault();
  todos.push(todoInput.value);

  paintTodo(todoInput.value);
  saveTodos();
  todoInput.value = "";
});
