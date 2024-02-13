// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterList from './Components/CharacterList';
import CharacterDetailsPage from './Components/CharacterDetailsPage';
import ConditionalSearchBar from './Components/ConditionalSearchBar';;
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <Router>
      <ConditionalSearchBar handleSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<CharacterList searchTerm={searchTerm} />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
