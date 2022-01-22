const clock = document.querySelector("#clock");

function updateClock() {
  const date = new Date();
  clock.innerText = new moment(date).format("LTS");
}

updateClock();
setInterval(updateClock, 1000);
