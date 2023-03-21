//refs ---

const refs = {
  input: document.querySelector("input"),
  controlBtns: document.getElementById("controls"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  fatherDiv: document.getElementById("boxes"),
  startSize: 30,

};

//events ---

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

//functions ---

function createBoxes(event) {
  for (let i = 0; i < refs.input.value; i += 1) {
    const divChild = document.createElement("div");
    refs.fatherDiv.appendChild(divChild);

    const changedSize = refs.startSize + i * 10;

    divChild.style.width = `${changedSize}px`;
    divChild.style.height = `${changedSize}px`;
    divChild.style.backgroundColor = getRandomHexColor();
  }

  refs.controlBtns.append(refs.fatherDiv);
  console.log("+");
  event.currentTarget.reset();
}



function destroyBoxes(event) {
  refs.fatherDiv.remove();
  console.log("-");
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
