import React, { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { getPokemonsForSlot } from "../services/PokemonService.js";
import "./ChoosePokemon.css";

const ChoosePokemon = ({ slot = 1, onConfirm }) => {
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshUsed, setRefreshUsed] = useState(false);

  const generateChoices = async () => {
    setLoading(true);
    const pokemons = await getPokemonsForSlot(slot);
    setChoices(pokemons);
    setSelected(null);
    setLoading(false);
  };

  useEffect(() => {
    generateChoices();
  }, []);

  const handleSelect = (pokemon) => setSelected(pokemon);

  const handleConfirm = () => {
    if (selected && onConfirm) onConfirm(selected);
    else alert("Please select a Pokémon first!");
  };

  const handleRefresh = () => {
    if (!refreshUsed) {
      generateChoices();
      setRefreshUsed(true);
    } else alert("You can only refresh once!");
  };

  if (loading) return <p>Loading Pokémon...</p>;

  return (
    <div className="choose-container">
      <h1 className="choose-title">Choose Your Pokémon</h1>
      <div className="choose-grid">
        {choices.map((pokemon, idx) => (
          <PokemonCard
            key={idx}
            pokemon={pokemon}
            onClick={() => handleSelect(pokemon)}
            isSelected={selected?.name === pokemon.name}
          />
        ))}
      </div>
      <div className="choose-actions">
        <button className="choose-btn confirm-btn" onClick={handleConfirm} disabled={!selected}>
          Confirm Selection
        </button>
        <button className="choose-btn refresh-btn" onClick={handleRefresh} disabled={refreshUsed}>
          Refresh Choices
        </button>
      </div>
    </div>
  );
};

export default ChoosePokemon;
