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
