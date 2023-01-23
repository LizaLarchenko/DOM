let btn = document.querySelector(".btn");
let text = document.querySelector(".text");

if (btn) {
  btn.addEventListener("click", () => {
    text.style.color = "red";
  });
}
