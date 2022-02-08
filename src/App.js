import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MoviesHeader } from "./components/MoviesHeader/MoviesHeader";
import { MoviesFooter } from "./components/MoviesFooter/MoviesFooter";
import { Blog } from "./components/Blog/Blog";
import { Search } from "./components/Search/Search";

import {
  ROUTE_BLOG,
  ROUTE_ERROR,
  ROUTE_MAIN,
  ROUTE_SEARCH,
} from "./utils/constanst";

const APIKEY = "9eff04d46f577f54aa4be3150957e4b5";

function App() {
  const [{ movies, searchTerm }, setMovies] = useState({
    movies: [],
    searchTerm: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  };
  const handleChange = (e) => {
    setMovies({ searchTerm: e.target.value });
  };

  return (
    <div className="App">
      <MoviesHeader />
      <Routes>
        <Route path={ROUTE_MAIN} element={<h2>MAIN PAGE</h2>} />
        <Route path={ROUTE_BLOG} element={<Blog />} />
        <Route
          path={ROUTE_SEARCH}
          element={
            <Search handleSubmit={handleSubmit} handleChange={handleChange} />
          }
        />
        <Route path={ROUTE_ERROR} element={<h2>404 ERROR!!!</h2>} />
      </Routes>
      <MoviesFooter />
    </div>
  );
}

export default App;
