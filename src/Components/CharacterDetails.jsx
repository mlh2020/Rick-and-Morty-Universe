
function CharacterDetails({ character, onClose }) {
    return (
        <div style={{ position: 'fixed', top: '20%', left: '30%', backgroundColor: 'black', padding: '20px', zIndex: 100 }}>
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location.name}</p>
            <p>Origin: {character.origin.name}</p>
            
        <img src={character.image} alt={character.name} />
        <button onClick={onClose}>Close</button>
        </div>
    );
}

export default CharacterDetails;
