import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => console.error("Error fetching character details:", error));
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <img src={character.image} alt={character.name} />
      {/* Add navigation or additional content as needed */}
    </div>
  );
}

export default CharacterDetailsPage;
