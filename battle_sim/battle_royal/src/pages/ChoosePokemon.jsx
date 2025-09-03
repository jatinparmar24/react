import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import { getPokemonsForSlot } from "../services/PokemonService.js";
import "./ChoosePokemon.css";

const MAX_TEAM = 6;
const MAX_MOVES = 4;
const ITEM_OPTIONS = ["Potion", "Berry", "Elixir", "None"];
const MOVE_OPTIONS = ["Tackle", "Quick Attack", "Flamethrower", "Water Gun", "Thunderbolt", "Scratch"];

const ChoosePokemon = () => {
  const [step, setStep] = useState(1); // 1 = select, 2 = setup
  const [currentSlot, setCurrentSlot] = useState(1);
  const [choices, setChoices] = useState([]);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshUsed, setRefreshUsed] = useState(false);

  const [teamSetup, setTeamSetup] = useState([]); // store moves/items per Pokémon

  const navigate = useNavigate();

  const generateChoices = async (slot) => {
    setLoading(true);
    try {
      const pokemons = await getPokemonsForSlot(slot);
      setChoices(pokemons);
    } catch (err) {
      console.error("Error fetching Pokémon:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (step === 1) generateChoices(currentSlot);
  }, [currentSlot, step]);

  // --- Step 1: Select Pokémon ---
  const handleSelect = (pokemon) => {
    setTeam([...team, pokemon]);
    if (team.length + 1 < MAX_TEAM) {
      setCurrentSlot(currentSlot + 1);
    } else {
      // All 6 selected → move to setup step
      setStep(2);
      // Initialize teamSetup with empty moves/items
      const setup = [...team, pokemon].map(p => ({
        name: p.name,
        sprite: p.sprite,
        hp: p.hp,
        attack: p.attack,
        moves: Array(MAX_MOVES).fill(""),
        item: "None",
      }));
      setTeamSetup(setup);
    }
  };

  const handleRemoveFromTeam = (index) => {
    const newTeam = [...team];
    newTeam.splice(index, 1);
    setTeam(newTeam);
    if (step === 2) {
      const newSetup = [...teamSetup];
      newSetup.splice(index, 1);
      setTeamSetup(newSetup);
    }
    setCurrentSlot(index + 1);
    setStep(1);
  };

  const handleRefresh = () => {
    if (!refreshUsed) {
      generateChoices(currentSlot);
      setRefreshUsed(true);
    } else alert("You can only refresh once!");
  };

  // --- Step 2: Assign Moves/Items ---
  const handleMoveChange = (pokeIndex, moveIndex, value) => {
    const newSetup = [...teamSetup];
    newSetup[pokeIndex].moves[moveIndex] = value;
    setTeamSetup(newSetup);
  };

  const handleItemChange = (pokeIndex, value) => {
    const newSetup = [...teamSetup];
    newSetup[pokeIndex].item = value;
    setTeamSetup(newSetup);
  };

  const handleBattle = () => {
    // validate all moves selected
    const incomplete = teamSetup.some(p => p.moves.some(m => !m));
    if (incomplete) {
      alert("Please assign 4 moves to each Pokémon before battling!");
      return;
    }
    navigate("/arena", { state: { playerTeam: teamSetup } });
  };

  // --- Render ---
  if (loading) return <p className="loading-text">Loading Pokémon...</p>;

  if (step === 1) {
    return (
      <div className="choose-container">
        <h1 className="choose-title">Build Your Pokémon Team</h1>
        <h2 className="slot-title">Select Pokémon {currentSlot} of {MAX_TEAM}</h2>

        {/* Team Preview */}
        <div className="team-preview">
          {team.length === 0 ? (
            <p>Select your Pokémon to form a team ({MAX_TEAM} total)</p>
          ) : (
            team.map((pokemon, idx) => (
              <div
                key={pokemon.name}
                className="team-member"
                onClick={() => handleRemoveFromTeam(idx)}
                title="Click to remove"
              >
                <img src={pokemon.sprite} alt={pokemon.name} />
                <p>{pokemon.name}</p>
              </div>
            ))
          )}
        </div>

        {/* Pokémon choices */}
        <div className="choose-grid">
          {choices.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onClick={() => handleSelect(pokemon)}
              isSelected={!!team.find((p) => p.name === pokemon.name)}
            />
          ))}
        </div>

        <div className="choose-actions">
          <button
            className="choose-btn refresh-btn"
            onClick={handleRefresh}
            disabled={refreshUsed}
          >
            Refresh Choices
          </button>
        </div>
      </div>
    );
  }

  // Step 2: Setup moves/items
  return (
    <div className="choose-container">
      <h1 className="choose-title">Setup Your Team</h1>

      {teamSetup.map((pokemon, pokeIndex) => (
        <div key={pokemon.name} className="setup-pokemon">
          <div className="setup-header">
            <img src={pokemon.sprite} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
          </div>
          <div className="moves-container">
            {pokemon.moves.map((move, moveIndex) => (
              <select
                key={moveIndex}
                value={move}
                onChange={(e) => handleMoveChange(pokeIndex, moveIndex, e.target.value)}
              >
                <option value="">Select Move {moveIndex + 1}</option>
                {MOVE_OPTIONS.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            ))}
          </div>
          <div className="item-container">
            <label>Item: </label>
            <select
              value={pokemon.item}
              onChange={(e) => handleItemChange(pokeIndex, e.target.value)}
            >
              {ITEM_OPTIONS.map(i => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <div className="choose-actions">
        <button
          className="choose-btn confirm-btn"
          onClick={handleBattle}
        >
          Battle!
        </button>
      </div>
    </div>
  );
};

export default ChoosePokemon;
