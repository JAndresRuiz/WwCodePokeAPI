async function pokemonAPI() {
    const buyCardsContainer = document.querySelector("#buyCardsContainer");
    try {
      for (let i = 1; i <= 151; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        const name = data.name;
        const imageUrl = data.sprites.other.dream_world.front_default;
        
        
        
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  pokemonAPI();