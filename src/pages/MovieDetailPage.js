import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faEllipsisH, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { movieData } from '../data/SampleData';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = movieData.find((movie) => movie.id === parseInt(id)); // Find the movie by ID

  if (!movie) {
    return <div>Movie not found</div>;
  }
  
  const generateStars = (rating) => {
    const starIcons = [];
    const maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
      if (i < Math.floor(rating)) {
        starIcons.push(
          <FontAwesomeIcon key={i}   icon={faStar} style={{ color: "#f58147" }} />
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
    <div className="movie-details-page">
      <div className="banner">
        {/* Back Button */}
        <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" style={{color: "rgb(4 4 4 / 43%)",}} /> 
        </Link>
        {/* Three Dots Button */}
        <div className="dots-button">
          <FontAwesomeIcon icon={faEllipsisH} />
        </div>
        {/* Movie Image */}
        <img src={movie.image} alt={movie.name} className="movie-image-detail" />
      </div>
      <div className="movie-details-content">
        <div className="movie-info">
          <div className='play-icon'>

  
          <FontAwesomeIcon className='play-icon-i' icon={faCirclePlay} size="4x" style={{ color: "#005eff" }} />

             
          </div>
          <div className='detail'>
          <h2>{movie.name}</h2>
          <p>Description: {movie.description}</p>
          <div className="movie-rating">
            <span>{movie.rating}</span>
            <div className="rating-stars">
              {generateStars(movie.rating)}
            </div>
            </div>
          </div>
          
        </div>
        <div className="actors">
          <h3>Actors</h3>
          <div className="actor-images">
            {movie.actors.map((actor, index) => (
              <div className="actor-image" key={index}>
                <img src={actor.image} alt={actor.name} />
    
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed-buttons">
        <div className="fixed-button1">Total:<span> ${movie.total}</span></div>
        <div className="fixed-button2">Chock out</div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
