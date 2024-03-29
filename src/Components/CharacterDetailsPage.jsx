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
      <p>Location: {character.location.name}</p>
      <p>Origin: {character.origin.name}</p>
      <img src={character.image} alt={character.name} />
      {/* additional content can go here */}
    </div>
  );
}

export default CharacterDetailsPage;
