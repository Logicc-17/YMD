// src/PlayerStats.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerStats = () => {
  const [playerData, setPlayerData] = useState(null);
  const [playerName, setPlayerName] = useState('');
  const [error, setError] = useState('');

  // Function to fetch player data
  const fetchPlayerData = async () => {
    if (!playerName) return; // Do nothing if no name is entered
    setError(''); // Clear previous errors
    try {
      const response = await axios.get(`https://api.brawlhalla.com/player/${playerName}/stats?api_key=YOUR_API_KEY`);
      setPlayerData(response.data);
    } catch (err) {
      setError('Failed to fetch data. Make sure the player name is correct.');
      setPlayerData(null);
    }
  };

  useEffect(() => {
    // If playerName changes, automatically fetch player data
    fetchPlayerData();
  }, [playerName]);

  return (
    <div>
      <h1>Brawlhalla Player Stats</h1>
      <input
        type="text"
        placeholder="Enter Brawlhalla Player Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={fetchPlayerData}>Fetch Player Stats</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {playerData ? (
        <div>
          <h2>{playerData.name}'s Stats</h2>
          <ul>
            <li>Rank: {playerData.rank}</li>
            <li>Rating: {playerData.rating}</li>
            <li>Games Played: {playerData.games_played}</li>
            <li>Win Rate: {playerData.win_rate}%</li>
          </ul>
        </div>
      ) : (
        <p>No player data available.</p>
      )}
    </div>
  );
};

export default PlayerStats;
