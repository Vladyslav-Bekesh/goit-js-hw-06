const inputArea = document.getElementById("validation-input");
console.log("🚀 inputArea:", inputArea);
console.log("data-length:", inputArea.getAttribute("data-length"));

inputArea.addEventListener("blur", () => {
  if (
    inputArea.value.length === Number(inputArea.getAttribute("data-length"))
  ) {
    inputArea.style.borderColor = "#4caf50";
    console.log("к-сть символів === потрібному");
  } else {

    inputArea.style.borderColor = "#f44336";
    console.log("к-сть символів !== потрібному");
  }
});
