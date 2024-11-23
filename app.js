const pokemons = 'pokemon'
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

console.dir(pokemon, { maxArrayLength: null })

console.log(game)

game.difficulty = 'Medium'
console.log(game.difficulty)

const starterPokemon = pokemon[0]
game.party.push(starterPokemon)
console.log(game.party)

game.party.push(pokemon[1])
game.party.push(pokemon[2])
game.party.push(pokemon[3])
console.log(game.party)

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true
  }
})
console.log(game.gyms)

const evolvedPokemon = pokemon[1]
const starterIndex = game.party.findIndex((pokemon) => pokemon.number === 1)
game.party.splice(starterIndex, 1, evolvedPokemon)
console.log(game.party)

game.party.forEach((pokemon) => {
  console.log(pokemon.name)
})

const starterPokemons = pokemon.filter((pokemon) => pokemon.starter)
starterPokemons.forEach((pokemon) => {
  console.log(pokemon.name)
})

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)
}

game.catchPokemon(pokemon[4])
console.log(game.party)

game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj)

  const pokeball = this.items.find((item) => item.name === 'pokeball')
  if (pokeball) {
    pokeball.quantity--
  }
}

game.catchPokemon(pokemon[5])
console.log(game.items)

game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true
  }
})
console.log(game.gyms)

game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 }
  this.gyms.forEach((gym) => {
    if (gym.completed) {
      gymTally.completed++
    } else {
      gymTally.incomplete++
    }
  })
  console.log(gymTally)
}

game.gymStatus()

game.partyCount = function () {
  return this.party.length
}

console.log(game.partyCount())

game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true
  }
})
console.log(game.gyms)

console.log(game)
