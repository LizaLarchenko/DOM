const btn = document.getElementById("btn");
const email = document.getElementById("email");

email.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    console.log("click", event.target.value);
  }
});
