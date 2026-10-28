export default function loadContact() {
  const content = document.querySelector("#content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-page");

  const headline = document.createElement("h1");
  headline.textContent = "Kontaktujte Nás";

  const info = document.createElement("div");
  info.classList.add("contact-card");
  info.innerHTML = `
    <h3>Kde nás najdete</h3>
    <p>📍 Náměstí Přemysla Otakara II. 12, Vysoké Mýto</p>
    <p>📞 Rezervace: +420 777 123 456</p>
    <p>✉️ E-mail: info@zlatyburger.cz</p>

    <h3 style="margin-top: 15px;">Rozvoz</h3>
    <p>Objednávky bereme i přes Wolt a Bolt Food do okruhu 15 km.</p>
  `;

  contactDiv.appendChild(headline);
  contactDiv.appendChild(info);
  content.appendChild(contactDiv);
}