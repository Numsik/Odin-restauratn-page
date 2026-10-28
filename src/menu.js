export default function menu() {
  const content = document.querySelector("#content");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-page");

  const headline = document.createElement("h1");
  headline.textContent = "U Zlatého Burgeru";

  const subline = document.createElement("p");
  subline.textContent = "Nejšťavnatější burgery v celém městě.";
  const hours = document.createElement("div");
  hours.classList.add("hours-card");
  hours.innerHTML = `
    <h3>Otevírací doba</h3>
    <p>Po - Pá: 11:00 - 22:00</p>
    <p>So - Ne: 12:00 - 23:00</p>
  `;

  homeDiv.appendChild(headline);
  homeDiv.appendChild(subline);
  homeDiv.appendChild(hours);

  content.appendChild(homeDiv);
}