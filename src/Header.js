import React from "react";
import headerImage from "./images/Trollface.png";

function Header() {
  return (
    <header>
      <img src={headerImage} alt="Troll Face" />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
