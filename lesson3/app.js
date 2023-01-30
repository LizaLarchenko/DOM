const list = document.getElementById("list");

list.addEventListener("mouseover", (event) => {
  event.target.style.background = "pink";
});

list.addEventListener("mouseout", (event) => {
  event.target.style.background = "yellow";
});
