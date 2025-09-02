import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <h1 className="home-title">Pokémon Battle</h1>
      <button
        className="home-start-btn"
        onClick={() => (window.location.href = "/choose")}
      >
        Start Game
      </button>
    </section>
  );
}
