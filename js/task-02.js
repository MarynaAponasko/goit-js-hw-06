const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (const obj of ingredients) {
  const newItem = document.createElement("li");
  newItem.textContent = obj;
  newItem.classList.add("item");
  list.append(newItem);
}
