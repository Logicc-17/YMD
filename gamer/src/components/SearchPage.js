import React, { useState, useEffect } from 'react';
import { fetchGames } from '../api';
import GameList from './GameList';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch default games on component mount
  useEffect(() => {
    const fetchDefaultGames = async () => {
      setLoading(true);
      setError(null);
      try {
        const defaultGames = await fetchGames({ page_size: 20 }); 
        setGames(defaultGames);
      } catch (err) {
        setError('Failed to fetch default games.');
      } finally {
        setLoading(false);
      }
    };

    fetchDefaultGames();
  }, []);

  // Handle search
  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const results = await fetchGames({ search: query });
      setGames(results);

      // If no results, provide feedback
      if (results.length === 0) {
        setError('No games found. Try a different search term.');
      }
    } catch (err) {
      setError('Failed to fetch search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Search Games</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a game"
          style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5rem 1rem' }}>
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && games.length > 0 && <GameList games={games} />}
    </div>
  );
};

export default SearchPage;
