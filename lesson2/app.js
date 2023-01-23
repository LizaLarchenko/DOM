let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

if (btn) {
  btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = text.value;
    list.appendChild(li);
  });
}
