import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FooterClock from '../components/FooterClock';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => setCharacter(res.data));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} width="300px" />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Type:</strong> {character.type || "N/A"}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
      <p><strong>Episode Count:</strong> {character.episode.length}</p>

      <FooterClock />
    </div>
  );
};

export default CharacterDetail;
