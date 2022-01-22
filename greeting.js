const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout");
const todo = document.querySelector("#todo_container");

function checkLoginState() {
  const userName = localStorage.getItem("userName");

  if (userName != null) {
    loginForm.classList.add("hidden");
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove("invisible");
    logoutButton.classList.remove("invisible");
    todo.classList.remove("invisible");
  } else {
    loginForm.classList.remove("hidden");
    greeting.classList.add("invisible");
    logoutButton.classList.add("invisible");
    todo.classList.add("invisible");
    todo.childNodes.forEach((child) => {
      child.remove();
    });
  }
}

checkLoginState();
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = loginInput.value;
  localStorage.setItem("userName", userName);
  greeting.innerText = `Hello ${userName}`;

  checkLoginState();
});

logoutButton.addEventListener("click", (event) => {
  localStorage.removeItem("userName");
  localStorage.removeItem("todos");
  checkLoginState();
});
