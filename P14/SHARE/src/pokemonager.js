const allPokemon = window.allPokemon;

window.pokemonager = {
  findNames: () => {
    // 1問目のコードをここに書きましょう
    return fetch("pokemons.js")
    .then((response) => response.json())
    .then((data)=>{
        const names = Array.data.map((pokemon) => pokemon.Name)
        return names;
      })
  
    },

  findByResistance: (attack) => {
    // 2問目のコードをここに書きましょう
return fetch("pokemons.js")
.then((response) => response.json())
.then((data) =>{
  const attackResis = Array.data.filter((pokemon) => pokemon.attack);
  return attackResis;
})
  },

  findNamesByResistance: (attack) => {
    // 3問目のコードをここに書きましょう

  },

  avgMaxCP: () => {
    // 4問目のコードをここに書きましょう

  },

  countedWeaknesses: () => {
    // 5問目のコードをここに書きましょう
    
  },
};
