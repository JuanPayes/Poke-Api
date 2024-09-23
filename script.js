
/* async function getPokemonData(pokeName) {
  try {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`);
    
   
    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }

    const pokemonData = await response.json();

    console.log(`Nombre: ${pokemonData.name}`);
    console.log(`ID: ${pokemonData.id}`);
    console.log(`Tipos: ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}`);
        
    return pokemonData;

  } catch(error){
    console.error('Error al obtener el pokemon', error);
  }
}
getPokemonData('Snorlax');
getPokemonData('Tyranitar');
getPokemonData('Gengar');
getPokemonData('Garchomp');
getPokemonData('Infernape');
getPokemonData('Gyarados');  */

const findButton = document.getElementById('find');
const deleteButton = document.getElementById('delete');
const nameInput = document.getElementById('name');
const pokemonsContainer = document.querySelector('.pokemons');

async function getPokemonData(pokename) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename.toLowerCase()}`);

    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }

    const pokemonData = await response.json();

    const pokemonDiv = document.createElement('div');
    pokemonDiv.innerHTML = `
      <p>ID: ${pokemonData.id}</p>
      <p>Nombre: ${pokemonData.name}</p>
      <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
      <p>Tipos: ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    `;

    pokemonsContainer.appendChild(pokemonDiv);

  } catch (error) {
    console.error('Error al obtener el Pokémon:', error);
  }
}

findButton.addEventListener('click', () => {
  const pokename = nameInput.value;
  if (pokename) {
    getPokemonData(pokename);
  } else {
    alert('Por favor, ingresa el nombre de un Pokémon');
  }
});

deleteButton.addEventListener('click', () => {
  pokemonsContainer.innerHTML = '';
});





