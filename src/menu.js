export default function loadMenu() {
  const content = document.querySelector("#content");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-page");

  const headline = document.createElement("h1");
  headline.textContent = "Naše Menu";

  const itemsList = document.createElement("div");
  itemsList.classList.add("menu-items");

  const meals = [
    {
      name: "Classic Smash Burger",
      desc: "150g hovězího krku, čedar, kyselá okurka, karamelizovaná cibulka a domácí BBQ omáčka.",
      price: "195 Kč"
    },
    {
      name: "Bacon & Jalapeño King",
      desc: "150g hovězího, dvojitý čedar, křupavá slanina, nakládané jalapeños a pálivá majonéza.",
      price: "225 Kč"
    },
    {
      name: "Crispy Halloumi Burger",
      desc: "Grilovaný cyperský sýr Halloumi, avokádo, polníček a lanýžová majonéza.",
      price: "185 Kč"
    },
    {
      name: "Domácí belgické hranolky",
      desc: "Smažené na hovězím loji s hrubou mořskou solí a tatarkou.",
      price: "65 Kč"
    }
  ];

  meals.forEach(meal => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const title = document.createElement("h3");
    title.textContent = `${meal.name} — ${meal.price}`;

    const text = document.createElement("p");
    text.textContent = meal.desc;

    card.appendChild(title);
    card.appendChild(text);
    itemsList.appendChild(card);
  });

  menuDiv.appendChild(headline);
  menuDiv.appendChild(itemsList);
  content.appendChild(menuDiv);
}