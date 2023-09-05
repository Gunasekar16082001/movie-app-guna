import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { movieData } from '../data/SampleData';

const MovieList = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const navigateToMovieDetails = (id) => {
    navigate(`/movie/${id}`);
  };

  const generateStars = (rating) => {
    const starIcons = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
      if (i < Math.floor(rating)) {
        starIcons.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#f58147" }} />
        );
      } else {
        starIcons.push(
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#ccc" }} />
        );
      }
    }

    return starIcons;
  };

  return (
    <div>
      <div className='head-text'>
        <p>Now</p> 
       <p>Recent</p>
      </div>
      {movieData.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => navigateToMovieDetails(movie.id)}
          style={{ cursor: 'pointer' }}
        >
          <Link to={`/movie/${movie.id}`} className="movie-link">
            <div className="movie-image">
              <img src={movie.image} alt={movie.name} />
            </div>
            <div className="movie-details">
              <h2>{movie.name}</h2>
              <div className='dir-time'>
                <p>Directed: {movie.directed}</p>
                <p>Time: {movie.time} min</p>
              </div>
            
              <div className="movie-rating">
              <span>{movie.rating}</span>
                <div className="rating-stars">
                  {generateStars(movie.rating)}
                </div>
              </div>
              
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
