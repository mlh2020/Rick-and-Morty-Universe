
function SearchBar({ handleSearch }) {
    return (
        <input type="text" placeholder="Search characters" onChange={handleSearch} />
    );
}

export default SearchBar;
