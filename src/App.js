import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MoviesHeader } from "./components/MoviesHeader/MoviesHeader";
import { Blog } from "./components/Blog/Blog";
import { MovieList } from "./components/MovieList/MovieList";
import { MoviesFooter } from "./components/MoviesFooter/MoviesFooter";
import {
  ROUTE_BLOG,
  ROUTE_ERROR,
  ROUTE_MAIN,
} from "./utils/constanst";

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
      
<Routes>
        <Route
          path={ROUTE_MAIN}
          element={
            <MovieList
        movies={movies}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        searchText={searchText}
      />
          }
        />
        <Route path={ROUTE_BLOG} element={<Blog />} />
        <Route path={ROUTE_ERROR} element={<h2>404 ERROR!!!</h2>} />
      </Routes>

      <MoviesFooter />
    </div>
  );
}

export default App;
