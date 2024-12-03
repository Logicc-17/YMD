// src/components/FuturisticNavBar.js
import React from 'react';
import './FuturisticNavBar.css';  // Ensure the path is correct

function FuturisticNavBar() {
  return (
    <nav className="futuristic-navbar">
      <div className="logo">YMD Games</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Leaderboard</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
      <button className="cta-button">Join Now</button>
    </nav>
  );
}

export default FuturisticNavBar;
