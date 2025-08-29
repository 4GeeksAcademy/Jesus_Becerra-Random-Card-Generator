import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  // Arrays con los valores y palos de las cartas
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['♥', '♦', '♣', '♠'];

  // Función para generar una carta aleatoria
  function generateRandomCard() {
    // Seleccionar un valor y un palo aleatoriamente
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];

    // Determinar el color del palo
    const isRed = randomSuit === '♥' || randomSuit === '♦';
    const suitColorClass = isRed ? 'red-suit' : 'black-suit';

    // Construir el HTML de la carta
    const cardHTML = `
      <div class="card">
        <div class="top-left ${suitColorClass} corner-element">
            <div class="suit-icon">${randomSuit}</div>
        </div>
        <div class="main-value ${suitColorClass}">
            ${randomValue}
        </div>
        <div class="bottom-right ${suitColorClass} corner-element">
            <div class="suit-icon">${randomSuit}</div>
        </div>
      </div>
    `;

    // Insertar la carta en el contenedor
    document.getElementById('card-container').innerHTML = cardHTML;
  }

  // Generar una carta al cargar la página
  generateRandomCard();
};