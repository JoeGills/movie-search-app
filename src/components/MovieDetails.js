import React from "react";

function MovieDetails({ movie }) {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
    </div>
  );
}

export default MovieDetails;
