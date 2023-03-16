const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.createElement("ul");

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  listEl.appendChild(liEl);
}

document.body.append(listEl);

// function listCreate(itemArray) {
//   const listEl = document.createElement("ul");

//   for (const item of itemArray) {
//     const liEl = document.createElement("li");
//     liEl.textContent = item;
//     listEl.appendChild(liEl);
//   }

//   document.body.append(listEl);
// }

// listCreate(ingredients);
