export const homePage = () => {
  const content = document.querySelector("#content");
  const restaurantTitle = document.createElement("h1");
  restaurantTitle.classList.add("restaurant-title");
  restaurantTitle.textContent = "Green Haven Bistro";
  const welcomeContainer = document.createElement("div");
  welcomeContainer.classList.add("welcome-container");
  const welcomeText = document.createElement("p");
  welcomeText.innerHTML = `Welcome to Green Haven Bistro! <br />
  Here, you'll enjoy the best flavors and experiences.`;
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  const hourText = document.createElement("p");
  hourText.innerHTML = `<strong>Hours:</strong> Monday to Sunday, 12:00 PM - 11:00 PM`;
  const locationText = document.createElement("p");
  locationText.innerHTML = `<strong>Location:</strong> Main Street 123, New York City`;
  welcomeContainer.appendChild(welcomeText);
  infoContainer.appendChild(hourText);
  infoContainer.appendChild(locationText);
  content.append(restaurantTitle, welcomeContainer, infoContainer);
};
