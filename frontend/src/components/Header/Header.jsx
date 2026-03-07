import { useState } from "react";
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <h1>Pull Tracker</h1>
      <div className="tabs">
        <button 
          className={`tab ${props.activeGame === "Genshin" ? "active" : ""}`}
          onClick={() => props.setActiveGame("Genshin")}
        >
          Genshin
        </button>
        <button 
          className={`tab ${props.activeGame === "HSR" ? "active" : ""}`}
          onClick={() => props.setActiveGame("HSR")}
        >
          Honkai Star Rail
        </button>
      </div>
    </header>
  );
}

export default Header;