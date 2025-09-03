import { MEGA_POKEMON, FINAL_POKEMON, ULTRA_BEASTS, LEGENDARY_MYTHICAL } from "../utils/constants.js";

const NAME_FIXES = {
  giratina: "giratina-altered",
  deoxys: "deoxys-normal",
  shaymin: "shaymin-land",
  darmanitan: "darmanitan-standard",
  tornadus: "tornadus-incarnate",
  thundurus: "thundurus-incarnate",
  landorus: "landorus-incarnate",
};

// pick `count` random names
function pickRandomNames(list, count = 3) {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// fetch full Pokémon data from API
export async function fetchPokemonData(name) {
  const fixedName = NAME_FIXES[name] || name;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${fixedName.toLowerCase()}`);
    if (!response.ok) throw new Error(`Pokémon not found: ${fixedName}`);

    const data = await response.json();
    const stats = Object.fromEntries(data.stats.map(s => [s.stat.name, s.base_stat]));

    return {
      name: data.name,
      sprite: data.sprites.front_default || data.sprites.other["official-artwork"].front_default,
      hp: stats.hp || 100,
      attack: stats.attack || 50,
      defense: stats.defense || 50,
      speed: stats.speed || 50,
      types: data.types.map(t => t.type.name),
      moves: data.moves.slice(0, 4).map(m => m.move.name),
    };
  } catch (error) {
    console.error("Failed to fetch Pokémon:", name, error);
    return {
      name,
      sprite: "",
      hp: 100,
      attack: 50,
      defense: 50,
      speed: 50,
      types: ["normal"],
      moves: ["tackle"],
    };
  }
}

// ✅ slot-based selection (for ChoosePokemon)
export async function getPokemonsForSlot(slot) {
  let list = [];
  if (slot === 1) list = MEGA_POKEMON;
  else if (slot === 2 || slot === 3) list = FINAL_POKEMON;
  else if (slot === 4) list = ULTRA_BEASTS;
  else if (slot === 5 || slot === 6) list = LEGENDARY_MYTHICAL;
  else list = [...MEGA_POKEMON, ...FINAL_POKEMON, ...ULTRA_BEASTS, ...LEGENDARY_MYTHICAL];

  const names = pickRandomNames(list, 3);
  return await Promise.all(names.map(fetchPokemonData));
}

// ✅ full random team (for AI teams in BattleArena)
export async function getRandomTeam() {
  const all = [...MEGA_POKEMON, ...FINAL_POKEMON, ...ULTRA_BEASTS, ...LEGENDARY_MYTHICAL];
  const names = pickRandomNames(all, 6);
  return await Promise.all(names.map(fetchPokemonData));
}
