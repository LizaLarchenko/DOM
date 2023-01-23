// console.log(document.getElementById("text").classList.toggle("text-input-2"));
// document.querySelector("[type='text']");
// document.querySelectorAll("div");

let text = document.getElementById("text");
let deleteBtn = document.querySelector(".delete-all");
let tasks = document.querySelector(".tasks");
let container = document.querySelector(".container");
// console.log(deleteBtn.innerHTML);
// console.log(container.innerHTML);

deleteBtn.addEventListener("click", () => {
  console.log("click");
});

text.addEventListener("change", () => {
  tasks.innerText = text.value;
});
