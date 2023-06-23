let cantidad = 20;
const buyCards = document.querySelector("#buyCards");

async function pokemonAPI() {
  const prueba = document.createElement("div");
  prueba.id = "buyCardsContainer";
  buyCards.appendChild(prueba)
  try {
    if (cantidad > 151) {
      cantidad = 151;
    }
    for (let i = 1; i <= cantidad; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}?limit=151`);
      const data = await response.json();
      const name = data.name;
      const imageUrl = data.sprites.other["official-artwork"].front_default;
      const baseEXP = data.base_experience;

      const card = document.createElement("div");
      card.classList.add("CardContainer");
      card.innerHTML = `
      <div class="nameLikeContainer">
        <p>${name}</p>
        <img src="/assets/heart.png" />
      </div>
      <div class="imageCardContainer">
        <img  src='${imageUrl}' alt="${name}" />
      </div>
      <div  class="expContainer">
        <p>EXP: ${baseEXP}</p>
        <button class="buyButton">Buy</button>
      </div>
      `;
      prueba.appendChild(card);
    }
  } catch (error) {
    console.log("Error:", error);
  }
  document.querySelector('.totalPokemon').textContent = `${cantidad} Cards`
}

pokemonAPI();

document.querySelector(".shoeMoreCards").addEventListener('click', ()=>{
  buyCards.removeChild(buyCardsContainer);
  cantidad += 20;
  pokemonAPI();
});


/*
async function pokemonAPI() {
  const buyCardsContainer = document.querySelector("#buyCardsContainer");
  try {
    for (let i = 1; i <= 151; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      const name = data.name;
      const imageUrl = data.sprites.other["official-artwork"].front_default;
      const baseEXP = data.base_experience;

      const card = document.createElement("div");
      card.classList.add("CardContainer");
      card.innerHTML = `
      <div class="nameLikeContainer">
        <p>${name}</p>
        <img src="/assets/heart.png" />
      </div>
      <div class="imageCardContainer">
        <img  src='${imageUrl}' alt="${name}" />
      </div>
      <div  class="expContainer">
        <p>EXP: ${baseEXP}</p>
        <button class="buyButton">Buy</button>
      </div>
      `;
      buyCardsContainer.appendChild(card);
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

pokemonAPI();
*/