import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ character, onClick }) => {
  return (
    <div className="character-card" onClick={onClick}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
