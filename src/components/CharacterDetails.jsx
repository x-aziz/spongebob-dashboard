import React, { useState } from 'react';
import './CharacterDetails.css';

const CharacterDetails = ({ character, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState({ ...character });

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    onSave(editedCharacter);
  };

  return (
    <div className="character-details">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedCharacter.name}
            onChange={(e) =>
              setEditedCharacter({ ...editedCharacter, name: e.target.value })
            }
          />
          <textarea
            value={editedCharacter.description}
            onChange={(e) =>
              setEditedCharacter({ ...editedCharacter, description: e.target.value })
            }
          />
          <input
            type="text"
            value={editedCharacter.image}
            onChange={(e) =>
              setEditedCharacter({ ...editedCharacter, image: e.target.value })
            }
          />
          <button onClick={handleSave}>Save Changes</button>
        </div>
      ) : (
        <div>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
