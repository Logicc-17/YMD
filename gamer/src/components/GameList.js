import React from 'react';
import './GameList.css'; // Import CSS for grid layout

const GameList = ({ games }) => {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <div key={game.id} className="game-card">
          <img className="card-img" src={game.background_image} alt={game.name} />
          <div className="card-body">
            <h3 className="card-title">{game.name}</h3>
            <p className="card-text">{game.released}</p>
            {/* Display the rating */}
            {game.rating && (
              <p className="card-rating">Rating: {game.rating}</p>
            )}
            <button className="card-button">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
