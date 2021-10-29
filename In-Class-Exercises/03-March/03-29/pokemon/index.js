const pokemon = require("pokemon");

let poke = pokemon.random();

console.log(poke);

let party = [];

for (let i = 0; i < 6; i++) {
    party.push(pokemon.random());
}

let partySort = party.sort();

console.log(partySort);
