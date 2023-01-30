// const html = document.element;

// html.addEventListener("scroll", function () {
//   document.getElementById("showScroll").innerHTML = pageYOffset + "px";
// });

const $scrollDown = document.querySelector("#scrollDown");
const $scrollBy = document.querySelector("#scrollBy");
const $scrollUp = document.querySelector("#scrollUp");

// при нажатии на #scrollDown
$scrollDown.onclick = function (e) {
  // отменяем стандартное действие браузера (переход по ссылке)
  e.preventDefault();
  scrollTo(0, 2000);
};
// при нажатии на #scrollBy
$scrollBy.onclick = function (e) {
  // отменяем стандартное действие браузера (переход по ссылке)
  e.preventDefault();
  scrollBy({ top: 200, behavior: "smooth" });
};
// при нажатии на ##scrollUp
$scrollUp.onclick = function (e) {
  // отменяем стандартное действие браузера (переход по ссылке)
  e.preventDefault();
  scroll({ top: 0, behavior: "smooth" });
};
