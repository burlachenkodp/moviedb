import React from "react";
import { Movie } from "../Movie/Movie";
import { Search } from "../Search/Search";

import classes from "./MovieList.module.css";

export const MovieList = ({ movies, handleOnSubmit, handleOnChange, searchText}) => {
  return (
    <div>
      <Search
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        searchText={searchText}
      />
      <div className={classes["movie-container"]}>
        {movies.length > 0 &&
          movies.map((movie) => <Movie {...movie} key={movie.id}></Movie>)}
      </div>
    </div>
  );
};
