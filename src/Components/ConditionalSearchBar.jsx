import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

function ConditionalSearchBar({ handleSearch }) {
    const location = useLocation();

  // Only render the SearchBar on the homepage
    if (location.pathname !== '/') {
        return null; // Do not render anything if not on the homepage
    }

    return <SearchBar handleSearch={handleSearch} />;
}

export default ConditionalSearchBar;
