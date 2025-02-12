const discover = [
  {
    name: "Ikogosi Warm Springs",
    address: "Ikogosi-Ekiti, Ekiti State, Nigeria",
    description:
      "A unique natural attraction where warm and cold springs flow side by side without mixing, surrounded by lush vegetation.",
  },
  {
    name: "Erin Ayonigba Sacred Fish River",
    address: "Ero, Ekiti State, Nigeria",
    description:
      "A sacred river known for its mystical fish that are considered untouchable and are believed to bring curses if harmed.",
  },
  {
    name: "Fajuyi Memorial Park",
    address: "Ado-Ekiti, Ekiti State, Nigeria",
    description:
      "A historical park dedicated to Colonel Adekunle Fajuyi, a respected figure in Nigerian history and a symbol of bravery.",
  },
  {
    name: "Ado-Ekiti Market",
    address: "Oja Oba Market, Ado-Ekiti, Ekiti State, Nigeria",
    description:
      "A bustling marketplace offering fresh produce, traditional crafts, and a glimpse into the local culture and trade.",
  },
  {
    name: "Arinta Waterfalls",
    address: "Ipole Iloro, Ekiti State, Nigeria",
    description:
      "A serene waterfall surrounded by rocks and vegetation, offering a tranquil escape and perfect for picnics and exploration.",
  },
  {
    name: "Ewi's Palace",
    address: "Ewi’s Palace, Ado-Ekiti, Ekiti State, Nigeria",
    description:
      "The royal residence of the Ewi of Ado-Ekiti, showcasing traditional Yoruba architecture and cultural heritage.",
  },
  {
    name: "Olosunta and Orole Hills",
    address: "Ikere-Ekiti, Ekiti State, Nigeria",
    description:
      "Sacred hills with hiking trails and spiritual significance to the people of Ikere, offering breathtaking views of the area.",
  },
  {
    name: "Ekiti Parapo Pavilion",
    address: "Ado-Ekiti, Ekiti State, Nigeria",
    description:
      "A historical site symbolizing the unity and strength of the Ekiti people during the Ekiti Parapo War.",
  },
];

const container = document.createElement("div");
container.classList.add("discover-container");

discover.forEach((place) => {
  const card = document.createElement("div");
  card.classList.add("discover-card");

  const title = document.createElement("h2");
  title.textContent = place.name;
  card.appendChild(title);

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = `images/${place.name.toLowerCase().replace(/ /g, "-")}.jpg`; // Assuming images are named after the place names
  img.alt = place.name;
  img.width = 300;
  img.height = 200;
  figure.appendChild(img);
  card.appendChild(figure);

  const address = document.createElement("address");
  address.textContent = place.address;
  card.appendChild(address);

  const description = document.createElement("p");
  description.textContent = place.description;
  card.appendChild(description);

  const button = document.createElement("button");
  button.textContent = "Learn More";
  card.appendChild(button);

  container.appendChild(card);
});

const imageNames = discover.map(
  (place) => place.name.toLowerCase().replace(/ /g, "-") + ".jpg"
);
console.log(imageNames);

document.body.appendChild(container);
