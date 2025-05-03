import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <img src={character.image} alt={character.name} width="100%" />
      <h3>{character.name}</h3>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
      <Link to={`/character/${character.id}`} target="_blank">View Details</Link>
    </div>
  );
};

export default CharacterCard;
