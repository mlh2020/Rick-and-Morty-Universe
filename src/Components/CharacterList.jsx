// CharacterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CharacterList({ searchTerm }) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
        setCharacters(response.data.results);
        })
        .catch(error => console.log(error));
    }, []);

    const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            {filteredCharacters.map(character => (
                <Link key={character.id} to={`/character/${character.id}`}>
                    <div>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt={character.name} style={{ width: '100px' }} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default CharacterList;
