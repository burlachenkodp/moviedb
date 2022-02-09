import React, { useState, useEffect } from "react";
import "./App.css";
import { MoviesHeader } from "./components/MoviesHeader/MoviesHeader";
import { MoviesFooter } from "./components/MoviesFooter/MoviesFooter";
import { Search } from "./components/Search/Search";
import { Movie } from "./components/Movie/Movie";

const APIKEY = "9eff04d46f577f54aa4be3150957e4b5";
const FEATURED = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=`;
function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };
  useEffect(() => {
    getMovies(FEATURED);
  }, []);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      getMovies(SEARCH_API + searchText);
    }
    setSearchText("");
  };
  return (
    <div className="App">
      <MoviesHeader />
      <Search 
      handleOnSubmit = {handleOnSubmit} handleOnChange = {handleOnChange}  searchText = {searchText}
      />

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie {...movie} key={movie.id}></Movie>)}
      </div>
      <MoviesFooter />
    </div>
  );
}

export default App;
