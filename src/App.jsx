import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './Components/CharacterList';
import SearchBar from './Components/SearchBar';
import CharacterDetails from './Components/CharacterDetails';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm)
  );

  const selectCharacter = (id) => {
    const character = characters.find(character => character.id === id);
    setSelectedCharacter(character);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <CharacterList characters={filteredCharacters} selectCharacter={selectCharacter} />
      {selectedCharacter && <CharacterDetails character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />}
    </div>
  )
}

export default App
