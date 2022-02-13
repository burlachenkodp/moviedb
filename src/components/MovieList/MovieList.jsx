import React, { useState, useEffect } from "react";
import { Movie } from "../Movie/Movie";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { sortList } from "../../utils/helpers";

import classes from "./MovieList.module.css";

export const MovieList = ({
  movies,
  handleOnSubmit,
  handleOnChange,
  searchText,
  setShowModal,
  page,
  setPage,
}) => {
  const [typeSort, setTypeSort] = useState("any");
  const [lang, setLang] = useState("language");

  const sortedArray = sortList(typeSort, movies);
  const MoviesArray =
    lang === "language"
      ? sortedArray
      : sortedArray.filter((item) =>
          item.original_language.toLowerCase().includes(lang)
        );

  const nextPage = (page) => {
    setPage(page + 1);
  };
  const prevPage = (page) => {
    console.log(page);
    if (page > 1) {
      setPage(page - 1);
    } else setPage(page);
  };

  return (
    <div>
      <Search
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        searchText={searchText}
      />

      <Filter
        typeSort={typeSort}
        setTypeSort={setTypeSort}
        lang={lang}
        setLang={setLang}
      ></Filter>
      <div>
        <div>
          <button onClick={() => setPage(prevPage)}>prev</button>
          <span>{page}</span>
          <button onClick={() => setPage(nextPage)}>next</button>
        </div>
        <div className={classes["movie-container"]}>
          {" "}
          {MoviesArray?.length ? (
            MoviesArray.map((movie) => (
              <Movie
                {...movie}
                key={movie.id}
                setShowModal={setShowModal}
              ></Movie>
            ))
          ) : (
            <h1>EMPTY LIST</h1>
          )}
        </div>
      </div>
    </div>
  );
};
