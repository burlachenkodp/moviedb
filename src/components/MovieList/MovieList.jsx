import React, { useState, useEffect } from "react";
import { Movie } from "../Movie/Movie";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
//import { sortList } from "../../utils/helpers";

import classes from "./MovieList.module.css";

export const MovieList = ({
  movies,
  handleOnSubmit,
  handleOnChange,
  searchText,
  setShowModal,
}) => {
  const [typeSort, setTypeSort] = useState("any");
  const [lang, setLang] = useState("language");

   const sortList = (field, list) => {
    if (list.length === 0) {
      return [];
    }
    switch (typeof list[0][field]) {
      case "string":
        return [...list].sort((a, b) => a[field].localeCompare(b[field]));
      case "number":
        return [...list].sort((a, b) => b[field] - a[field]);
      default:
        return list;
    }
  };
  
  const sortedArray = sortList(typeSort, movies);
  console.log(sortedArray);
 // console.log(sortedArray.filter((item) => item.original_language.toLowerCase().includes(lang.toLowerCase)));
//const FilterArray = sortedArray.filter((item) => item.original_language.toLowerCase().includes(lang.toLowerCase));




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
      <div className={classes["movie-container"]}>
        {sortedArray?.length ? (
          sortedArray.map((movie) => <Movie {...movie} key={movie.id} setShowModal={setShowModal}></Movie>)
        ) : (
          <h1>EMPTY LIST</h1>
        )}
      </div>
    </div>
  );
};
