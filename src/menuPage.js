export const menuPage = () => {
  const content = document.querySelector("#content");
  const menuText = document.createElement("h1");
  menuText.classList.add("menu-text");
  menuText.textContent = "Menu";
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");
  const foodTitle = document.createElement("h3");
  foodTitle.classList.add("food-title");
  foodTitle.textContent = "Food";
  const drinksContainer = document.createElement("div");
  drinksContainer.classList.add("drink-container");
  const drinksTitle = document.createElement("h3");
  drinksTitle.classList.add("drinks-title");
  drinksTitle.textContent = "Drinks";
  foodContainer.appendChild(foodTitle);
  foodContainer.appendChild(createList(menu.food));
  drinksContainer.appendChild(drinksTitle);
  drinksContainer.appendChild(createList(menu.drinks));
  content.append(menuText, foodContainer, drinksContainer);
};

const menu = (() => {
  const food = [
    "Spinach Salad",
    "Guacamole",
    "Steamed Broccoli",
    "Avocado",
    "Green Beans",
    "Basil Pesto",
  ];

  const drinks = [
    "Cucumber Juice",
    "Spinach Smoothie",
    "Mint Liquor",
    "Matcha Latte",
    "Detox Green Juice",
  ];

  return { food, drinks };
})();

const createList = (items) => {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
};
