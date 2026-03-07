import { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Pull Tracker</h1>
      <div className="tabs">
        <button className="tab active">Genshin</button>
        <button className="tab">Honkai Star Rail</button>
      </div>
    </header>
  );
}

export default Header;