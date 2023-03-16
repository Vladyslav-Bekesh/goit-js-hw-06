const btns = document.getElementById("counter");
const txtField = document.getElementById("value");

const refs = {
  incBtn: btns.querySelector("[data-action=increment]"),
  decBtn: btns.querySelector("[data-action=decrement]"),
};

function decrement() {
  let count = Number(txtField.textContent);
  count -= 1;
  count = count.toString();
  
  return txtField.textContent = count;
}

function increment() {
  let count = Number(txtField.textContent);
  count += 1;
  count = count.toString();

  return (txtField.textContent = count);
}

refs.incBtn.addEventListener("click", increment);
refs.decBtn.addEventListener("click", decrement);