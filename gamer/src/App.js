import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import FuturisticNavBar from './components/FuturisticNavBar'; // Correct the path if necessary
import HomePage from './components/HomePage'; // Import HomePage for the game filter page
import SearchPage from './components/SearchPage'; // Import SearchPage for game search functionality

function App() {
  return (
    <Router>
      <div>
        {/* Include the Futuristic Navbar */}
        <FuturisticNavBar />
        
        {/* Main content with padding to prevent overlap with Navbar */}

        {/* Routing for different pages */}
        <div>
          <Routes>
            {/* Home page for game filters */}
            <Route path="/" element={<HomePage />} />
            {/* Search page for searching specific games */}
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
