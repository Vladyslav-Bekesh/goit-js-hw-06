//elements ---
const refs = {
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
};

//events ---
refs.btn.addEventListener("click", changeColor);


//function ---
function changeColor(event) {
  refs.span.textContent = `"${getRandomHexColor()}"`;
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
