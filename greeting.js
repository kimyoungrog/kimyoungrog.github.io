const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");

function checkLoginState() {
  const userName = localStorage.getItem("userName");
  const todoList = document.querySelector("#todo_list");
  const contentInternal = document.querySelector("#content_internal");

  if (userName != null) {
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
    contentInternal.classList.remove("hidden");
  } else {
    loginForm.classList.remove("hidden");
    greeting.classList.add("hidden");
    logoutButton.classList.add("hidden");
    contentInternal.classList.add("hidden");
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

  calendar.render();
});

logoutButton.addEventListener("click", (event) => {
  localStorage.removeItem("userName");
  localStorage.removeItem("todos");
  localStorage.removeItem("privateGroup");
  checkLoginState();
});
