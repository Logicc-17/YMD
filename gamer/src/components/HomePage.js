import React, { useEffect, useState } from 'react';
import { fetchGames } from '../api';
import GameList from './GameList';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({
    genres: '', // No default genre
    ordering: '', // No default sorting
  });

  // Fetch games by default when the component mounts
  useEffect(() => {
    const fetchDefaultGames = async () => {
      const gamesData = await fetchGames({ page_size: 50 }); // Fetch 50 games by default
      setGames(gamesData);
    };
    fetchDefaultGames();
  }, []);

  // Fetch filtered games when filters change
  useEffect(() => {
    const fetchFilteredGames = async () => {
      if (filters.genres || filters.ordering) {
        const gamesData = await fetchGames(filters);
        setGames(gamesData);
      }
    };
    fetchFilteredGames();
  }, [filters]);

  return (
    <div>
      <h1>Featured Games</h1>
      <div>
        <label>
          Genre:
          <select onChange={(e) => setFilters({ ...filters, genres: e.target.value })}>
            <option value="">All</option>
            <option value={1}>Free Online Games</option>
            <option value={2}>Action</option>
            <option value={3}>Strategy</option>
            <option value={4}>RPG</option>
            <option value={5}>Shooter</option>
            <option value={9}>Adventure</option>
            <option value={12}>Puzzle</option>
            <option value={13}>Racing</option>
            <option value={14}>Sports</option>

          </select>
        </label>
        <label>
          Sort by:
          <select onChange={(e) => setFilters({ ...filters, ordering: e.target.value })}>
            <option value="">Default</option>
            <option value="added">Date Added</option>
            <option value="name">Name</option>
            <option value="released">Release Date</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Average Rating</option>
          </select>
        </label>
      </div>
      <GameList games={games} />
    </div>
  );
};

export default HomePage;
