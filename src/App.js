import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import DesktopView from './pages/DesktopView';
import MovieList from './pages/MovieListPage'; // Import MovieList
import MovieDetailsPage from './pages/MovieDetailPage';

function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Listen for window resize events
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {isMobileView ? (
          <div className="mobile-landing-page">
          <Routes> 
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
          </div>
        ) : (
          <DesktopView />
        )}

      
        </div>
    </Router>
  );
}

export default App;
