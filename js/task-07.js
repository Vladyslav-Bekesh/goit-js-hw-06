const slider = document.getElementById("font-size-control");
const text = document.getElementById("text");
// console.log("🚀slider:", slider);
// console.log("🚀text:", text);


slider.addEventListener("input", () => {
  text.style.fontSize = `${slider.value}px`;
})
