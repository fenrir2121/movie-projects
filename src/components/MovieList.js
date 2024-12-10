import React from "react";
import "../App.css";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="images-container" key={index}>
          <img src={movie.Poster} alt={movie.Title} />
          <div className="movie-info">
            <div className="movie-title">
              {movie.Title}
              <div className="movie-release-date"> {movie.Year}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
