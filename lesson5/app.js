const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

first.addEventListener("touchstart", (event) => {
  console.log("Вы приложили палец к элементу");
});

second.addEventListener("touchmove", (event) => {
  console.log("По мне ведут пальцем");
});

third.addEventListener("touchend", (event) => {
  console.log("Прикосновение закончено");
});
