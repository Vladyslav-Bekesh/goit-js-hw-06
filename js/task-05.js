const input = document.getElementById("name-input");
const userName = document.getElementById("name-output");
// console.log("🚀input:", input);

input.addEventListener("input", (event) => {
  userName.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    userName.textContent = "Anonymous";
  }
});
