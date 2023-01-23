let btn = document.getElementById("btn");
let text = document.getElementById("hello");

if (btn) {
  btn.addEventListener("click", () => {
    text.innerText = "Hello World!";
  });
}
