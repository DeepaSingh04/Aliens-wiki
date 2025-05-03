import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import FooterClock from '../components/FooterClock';
import './Home.css';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [theme, setTheme] = useState('light');

  const fetchCharacters = async (pageNum) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${pageNum}`);
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <div className={`home-container ${theme}`}>
      <div className="main-wrapper">
        <h1>Rick and Morty Wiki</h1>

        <div className="theme-toggle">
          <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>

        <div className="character-grid">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => setPage((prev) => Math.max(1, prev - 1))}>Previous</button>
          <span>Page: {page}</span>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
      </div>

      <FooterClock />
    </div>
  );
};

export default Home;
