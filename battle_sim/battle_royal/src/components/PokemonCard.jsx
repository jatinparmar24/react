// PokemonCard.jsx
import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, onClick, isSelected }) => {
  return (
    <div
      className={`pokemon-card ${isSelected ? "selected" : ""}`}
      onClick={onClick} // use the click handler from parent
    >
      <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-img" />
      <h3>{pokemon.name}</h3>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
    </div>
  );
};

export default PokemonCard;
