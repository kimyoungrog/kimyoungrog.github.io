const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");

function checkLoginState() {
  const userName = localStorage.getItem("userName");
  const todoContainer = document.querySelector("#todo_container");
  const todoList = document.querySelector("#todo_list");

  if (userName != null) {
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove("invisible");
    logoutButton.classList.remove("invisible");
    todoContainer.classList.remove("invisible");
  } else {
    loginForm.classList.remove("hidden");
    greeting.classList.add("invisible");
    logoutButton.classList.add("invisible");
    todoContainer.classList.add("invisible");
    todoList.innerHTML = "";
    todoList.classList.add("hidden");
  }
}

checkLoginState();
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = loginInput.value;
  localStorage.setItem("userName", userName);
  greeting.innerText = `Hello ${userName}`;

  checkLoginState();
  loginInput.value = "";
});

logoutButton.addEventListener("click", (event) => {
  localStorage.removeItem("userName");
  localStorage.removeItem("todos");
  checkLoginState();
});
