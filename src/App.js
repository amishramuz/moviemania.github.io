import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./app.css";
import { Footer } from "./footer";

//57185f2b
const API_Url = "http://www.omdbapi.com?apikey=57185f2b";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    search_movies('Spider');
  }, []);
  const search_movies = async (title) => {
    const response = await fetch(`${API_Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  return (
    <div className="app">
      <h1>Movie Mania</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => search_movies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
      <Footer/>
    </div>

  );
};

export default App;
