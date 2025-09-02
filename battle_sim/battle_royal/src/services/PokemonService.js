import { MEGA_POKEMON, FINAL_POKEMON, ULTRA_BEASTS, LEGENDARY_MYTHICAL } from "../utils/constants.js";

// pick `count` random names from a list
function pickRandomNames(list, count = 3) {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// fetch stats from PokéAPI for one Pokémon
async function fetchPokemonData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  const data = await response.json();
  const hp = data.stats.find(s => s.stat.name === "hp")?.base_stat || 100;
  const attack = data.stats.find(s => s.stat.name === "attack")?.base_stat || 50;
  return {
    name: data.name,
    sprite: data.sprites.front_default,
    hp,
    attack,
  };
}

// generate Pokémon objects for a slot
export async function getPokemonsForSlot(slot) {
  let list = [];
  if (slot === 1) list = MEGA_POKEMON;
  else if (slot === 2 || slot === 3) list = FINAL_POKEMON;
  else if (slot === 4) list = ULTRA_BEASTS;
  else if (slot === 5 || slot === 6) list = LEGENDARY_MYTHICAL;
  else list = [...MEGA_POKEMON, ...FINAL_POKEMON, ...ULTRA_BEASTS, ...LEGENDARY_MYTHICAL];

  const names = pickRandomNames(list);
  const pokemons = await Promise.all(names.map(name => fetchPokemonData(name)));
  return pokemons;
}
