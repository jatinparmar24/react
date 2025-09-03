// src/pages/BattleArena.jsx
import React, { useEffect, useState } from "react";
import "./BattleArena.css";
import { getRandomTeam } from "../services/pokemonService";

// simplified type effectiveness chart
const TYPE_EFFECTIVENESS = {
  fire: { grass: 2, water: 0.5, fire: 0.5 },
  water: { fire: 2, grass: 0.5, water: 0.5 },
  grass: { water: 2, fire: 0.5, grass: 0.5 },
  electric: { water: 2, ground: 0, electric: 0.5 },
  ground: { electric: 2, fire: 2, grass: 0.5, water: 0.5 },
};

function getEffectiveness(moveType, targetTypes) {
  let multiplier = 1;
  targetTypes.forEach(type => {
    if (TYPE_EFFECTIVENESS[moveType]?.[type]) {
      multiplier *= TYPE_EFFECTIVENESS[moveType][type];
    }
  });
  return multiplier;
}

export default function BattleArena() {
  const [playerTeam, setPlayerTeam] = useState([]);
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [playerIdx, setPlayerIdx] = useState(0);
  const [enemyIdx, setEnemyIdx] = useState(0);
  const [log, setLog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTeams() {
      setLoading(true);
      const team1 = await getRandomTeam();
      const team2 = await getRandomTeam();
      setPlayerTeam(team1.map(p => ({ ...p, currentHp: p.hp })));
      setEnemyTeam(team2.map(p => ({ ...p, currentHp: p.hp })));
      setLoading(false);
    }
    loadTeams();
  }, []);

  function attack(attacker, defender) {
    const baseDamage = attacker.attack - defender.defense / 3;
    const type = attacker.types[0]; // use first type as move type
    const effectiveness = getEffectiveness(type, defender.types);
    const damage = Math.max(5, Math.floor(baseDamage * effectiveness));
    return { damage, effectiveness };
  }

  function handleTurn(moveName) {
    let newPlayerTeam = [...playerTeam];
    let newEnemyTeam = [...enemyTeam];
    let player = { ...newPlayerTeam[playerIdx] };
    let enemy = { ...newEnemyTeam[enemyIdx] };
    let turnLog = [];

    const first = player.speed >= enemy.speed ? "player" : "enemy";

    // --- first attacker
    if (first === "player") {
      const { damage, effectiveness } = attack(player, enemy);
      enemy.currentHp = Math.max(0, enemy.currentHp - damage);
      turnLog.push(`${player.name} used ${moveName}! It dealt ${damage} damage${effectiveness > 1 ? " (super effective!)" : ""}.`);
    } else {
      const enemyMove = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
      const { damage, effectiveness } = attack(enemy, player);
      player.currentHp = Math.max(0, player.currentHp - damage);
      turnLog.push(`${enemy.name} used ${enemyMove}! It dealt ${damage} damage${effectiveness > 1 ? " (super effective!)" : ""}.`);
    }

    // --- check if defender fainted
    if (enemy.currentHp <= 0 && first === "player") {
      turnLog.push(`${enemy.name} fainted!`);
      newEnemyTeam[enemyIdx] = enemy;
      setEnemyIdx(prev => prev + 1);
    } else if (player.currentHp <= 0 && first === "enemy") {
      turnLog.push(`${player.name} fainted!`);
      newPlayerTeam[playerIdx] = player;
      setPlayerIdx(prev => prev + 1);
    } else {
      // --- second attacker goes only if first didn't faint target
      if (first === "player") {
        const enemyMove = enemy.moves[Math.floor(Math.random() * enemy.moves.length)];
        const { damage, effectiveness } = attack(enemy, player);
        player.currentHp = Math.max(0, player.currentHp - damage);
        turnLog.push(`${enemy.name} used ${enemyMove}! It dealt ${damage} damage${effectiveness > 1 ? " (super effective!)" : ""}.`);

        if (player.currentHp <= 0) {
          turnLog.push(`${player.name} fainted!`);
          newPlayerTeam[playerIdx] = player;
          setPlayerIdx(prev => prev + 1);
        }
      } else {
        const { damage, effectiveness } = attack(player, enemy);
        enemy.currentHp = Math.max(0, enemy.currentHp - damage);
        turnLog.push(`${player.name} used ${moveName}! It dealt ${damage} damage${effectiveness > 1 ? " (super effective!)" : ""}.`);

        if (enemy.currentHp <= 0) {
          turnLog.push(`${enemy.name} fainted!`);
          newEnemyTeam[enemyIdx] = enemy;
          setEnemyIdx(prev => prev + 1);
        }
      }
    }

    // update teams
    newPlayerTeam[playerIdx] = player;
    newEnemyTeam[enemyIdx] = enemy;
    setPlayerTeam(newPlayerTeam);
    setEnemyTeam(newEnemyTeam);

    // update log
    setLog(prev => [...prev, ...turnLog]);
  }

  if (loading) return <p className="arena-loading">Loading teams...</p>;

  const player = playerTeam[playerIdx];
  const enemy = enemyTeam[enemyIdx];

  if (!player) return <h2 className="arena-result">You lost!</h2>;
  if (!enemy) return <h2 className="arena-result">You won!</h2>;

  return (
    <section className="arena">
      <h2 className="arena-title">Battle Arena</h2>
      <div className="arena-field">
        <div className="pokemon-side player">
          <img src={player.sprite} alt={player.name} />
          <h3>{player.name} (HP: {player.currentHp}/{player.hp})</h3>
          <div className="moves">
            {player.moves.map(m => (
              <button key={m} onClick={() => handleTurn(m)}>{m}</button>
            ))}
          </div>
        </div>

        <div className="pokemon-side enemy">
          <img src={enemy.sprite} alt={enemy.name} />
          <h3>{enemy.name} (HP: {enemy.currentHp}/{enemy.hp})</h3>
        </div>
      </div>

      <div className="arena-log">
        <h4>Battle Log</h4>
        {log.map((entry, idx) => (
          <p key={idx}>{entry}</p>
        ))}
      </div>
    </section>
  );
}
