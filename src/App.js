import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

const App = () => {
  // State to hold the list of movies fetched from the API
  const [movies, SetMovies] = useState([]);

  // State to hold the current search query entered by the user
  const [SearchMovie, setSearchMovie] = useState("");

  // Function to fetch movies from the OMDB API based on the search query
  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${SearchMovie}&apikey=656de29`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      SetMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(SearchMovie);
  }, [SearchMovie]);

  return (
    <div className="movie-container">
      <div className="movie-heading">
        <h1>Moviesssssssssssssss</h1>
      </div>

      <div className="searchbar-row">
        <SearchBar SearchMovie={SearchMovie} setSearchMovie={setSearchMovie} />
      </div>

      <div className="row content-row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
