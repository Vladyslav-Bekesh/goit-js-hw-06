//params ---
const form = document.querySelector(".login-form");

//events ---
form.addEventListener("submit", handleSubmit);

//functions ---
function handleSubmit(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;

  if (emailValue === "" || passwordValue === "") {
    alert("all fields must be fill");
  } else {
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
      console.log(`name: ${name}, value: ${value}`);
    });
  }

  event.currentTarget.reset();
}
