const phone = document.getElementById("phone"); //phone.addEventListener('blur', function()
const message = document.getElementById("message");
const email = document.getElementById("email");
// phone.onblur = function () {
//   let phoneValue = this.value;
//   if (phoneValue.includes("+")) {
//     console.log("Верный тел");
//   } else {
//     console.log("Вроде не верно))");
//   }
// };

phone.addEventListener("focus", (event) => {
  event.target.style.background = "yellow";
});

phone.addEventListener("blur", (event) => {
  event.target.style.background = "pink";
});

message.addEventListener("focus", (event) => {
  event.target.style.background = "yellow";
});

message.addEventListener("blur", (event) => {
  event.target.style.background = "pink";
});

email.addEventListener("focus", (event) => {
  event.target.style.background = "yellow";
});

email.addEventListener("blur", (event) => {
  event.target.style.background = "pink";
});
