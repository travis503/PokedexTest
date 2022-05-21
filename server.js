const axios = require('axios');

let pokemon = 'zigzagoon';

var name, genus;

const pokePromise = new Promise((res, err) => {
  axios
  .get('https://pokeapi.co/api/v2/pokemon/' + pokemon)
  .then((res) => {
    name = res.data.species.name;
  })
  .catch((error) => {
    console.error('Error getting Pokemon name.');
    console.log(error);
  })
  .then(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon-species/' + pokemon)
    .then((res) => {
      genus = res.data.genera[7].genus;
    })
    .catch((error) => {
      console.log('Error getting pokemon data.');
      console.error(error);
    })
    .then(() => {
      console.log(`Here\'s some information about ${pokemon}!`);
      console.log(name + ', the ' + genus + '.');
    })
  })
})