import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon, onClick, isSelected }) => {
  return (
    <div
      className={`pokemon-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {pokemon.sprite ? (
        <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-img" />
      ) : (
        <div className="pokemon-placeholder">No Image</div>
      )}
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
    </div>
  );
};

export default PokemonCard;
