
const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToPlay: Boolean
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;










// const pokemon = [
//     {name: "bulbasaur", img: "https://img.pokemondb.net/artwork/bulbasaur.jpg"},
//     {name: "ivysaur", img: "https://img.pokemondb.net/artwork/ivysaur.jpg"},
//     {name: "venusaur", img: "https://img.pokemondb.net/artwork/venusaur.jpg"},
//     {name: "charmander", img: "https://img.pokemondb.net/artwork/charmander.jpg"},
//     {name: "charizard", img: "https://img.pokemondb.net/artwork/charizard.jpg"},
//     {name: "squirtle", img: "https://img.pokemondb.net/artwork/squirtle.jpg"},
//     {name: "wartortle", img: "https://img.pokemondb.net/artwork/wartortle.jpg"}
//  ];





