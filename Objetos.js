let pokemonsTypes = {
    charizard: 'fire',
    blastoise: 'water',
    venossaur: 'plant',
    pikachu: 'thunder',
    raichu: 'thunder',
    charmander: 'fire',
    squirtle: 'water',
    bulbassaur: 'plant'
}

const typesPokemon = {pokemons: [
    {name: 'charmander', type: 'fire'},
    {name: 'squirtle', type: 'water'},
    {name: 'bulbassaur', type: 'plant'},
    {name: 'pikachu', type: 'thunder'},
  ]}
  
  let keys = Object.keys(pokemonsTypes);
  //console.log("Keys are ", keys)
  let values = Object.values(pokemonsTypes);
  //console.log("Values are", values)
  let entries = Object.entries(pokemonsTypes);
  //console.log("The pokemon", entries[5][0], 'is', entries[5][1])
  
  let size = typesPokemon['pokemons'].length
  console.log(size)
  let poke = typesPokemon['pokemons']
  //console.log(poke)
  for (let i = 0; i < poke.length; i+=1) {
    console.log(poke[i]);
  }