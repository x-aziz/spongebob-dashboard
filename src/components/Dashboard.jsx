import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import CharacterDetails from './CharacterDetails';
import './Dashboard.css';

const initialCharacters = [
  {
    id: 1,
    name: 'SpongeBob SquarePants',
    description: 'A yellow sea sponge who lives in a pineapple under the sea.',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/7e/SpongeBob_SquarePants_character.svg',
  },
  {
    id: 2,
    name: 'Patrick Star',
    description: 'A pink starfish who is SpongeBob\'s best friend.',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/33/Patrick_Star.svg',
  },
  // Add more characters as needed
];

const Dashboard = () => {
  const [characters, setCharacters] = useState(initialCharacters);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleDeleteCharacter = (characterId) => {
    setCharacters(characters.filter(character => character.id !== characterId));
    setSelectedCharacter(null);
  };

  const handleSaveCharacter = (updatedCharacter) => {
    setCharacters(characters.map(character =>
      character.id === updatedCharacter.id ? updatedCharacter : character
    ));
    setSelectedCharacter(updatedCharacter);
  };

  return (
    <div className="dashboard">
      <div className="character-list">
        {characters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            onClick={() => handleCharacterClick(character)}
          />
        ))}
      </div>
      <div className="character-details-panel">
        {selectedCharacter && (
          <CharacterDetails
            character={selectedCharacter}
            onDelete={() => handleDeleteCharacter(selectedCharacter.id)}
            onSave={handleSaveCharacter}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
