import React from 'react';

function CharacterList({ characters, selectCharacter }) {
    return (
        <div>
            {characters.map(character => (
        <div key={character.id} onClick={() => selectCharacter(character.id)}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} style={{ width: '100px' }} />
        </div>
        ))}
    </div>
    );
}

export default CharacterList;
