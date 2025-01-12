const pokemon = require('./data.js')
const game = {
  party: [],
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
  ]
}

game.difficulty = 'Medium'

const starterPokemon = pokemon.find((p) => p.starter)
game.party.push(starterPokemon)
const additionalPokemon = [
  pokemon.find((p) => p.number === 4),
  pokemon.find((p) => p.number === 7),
  pokemon.find((p) => p.number === 25)
]
game.party.push(...additionalPokemon)

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})

const evolvedPokemon = pokemon.find(
  (p) => p.number === starterPokemon.number + 1
)
game.party.splice(0, 1, evolvedPokemon)

game.party.forEach((pokemon) => {
  console.log(pokemon.name)
})

const starterPokemonList = pokemon.filter((p) => p.starter)
starterPokemonList.forEach((pokemon) => {
  console.log(pokemon.name)
})

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)

  const pokeballItem = this.items.find((item) => item.name === 'pokeball')
  if (pokeballItem) {
    pokeballItem.quantity -= 1
  }
}

const wildPokemon = pokemon.find((p) => p.number === 59)
game.catchPokemon(wildPokemon)

game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})

game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 }
  this.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed += 1
    } else {
      gymTally.incomplete += 1
    }
  })
  console.log(gymTally)
}

game.gymStatus()

game.partyCount = function () {
  return this.party.length
}

console.log('Number of Pokémon in the party:', game.partyCount())

game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})

console.log(game)
