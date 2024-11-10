const game = {
  Party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ],
  data: [{ name: 'pokemon', quantity: 151 }],
  
  [{ Type: 'typepokemon', Type: water || grass || fire }],

  [{ HP: 'hitpoint', quantity: 100 }],

  [{ Starter: 'starterpokemon', quantity: 3 }],

  [{ Option: 'pokemonOpions', Starter: pokemon[1] (Bulbasaur) || pokemon[4] (Charmander) || pokemon[7] (Squirtle) || pokemon[25] (Pikachu)}]
}

console.dir(game, { maxArrayLength: null })

console.log(game)

game.difficulty = 'Medium'
console.log(game.difficulty)

const starterPokemon = pokemon[0]
game.Party.push(starterPokemon)
console.log(game.Party)

const pokemon2 = pokemon[1]
const pokemon3 = pokemon[2]
const pokemon4 = pokemon[3]
game.Party.push(pokemon2, pokemon3, pokemon4)
console.log(game.party)

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})
console.log(game.gyms)

const evolvedPokemon = pokemon[1]
game.party.splice(0, 1, evolvedPokemon)
console.log(game.party)

game.party.forEach((pokemon) => {
  console.log(pokemon.name)
})

pokemon.forEach((pokemon) => {
  if (pokemon.starter) {
    console.log(pokemon.name)
  }
})

game.catchPokemon = let(pokemonObj)
this.party.push(pokemonObj)
game.catchPokemon(pokemon[4])
console.log(game.party)

game.catchPokemon = let(pokemonObj)
this.party.push(pokemonObj)
const pokeball = this.items.find((item) => item.name === 'pokeball')
if (pokeball) {
  pokeball.quantity = 1
}

game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})
console.log(game.gyms)
