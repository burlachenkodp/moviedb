import React from "react";
import classes from "./Search.module.css";


export const Search = ({ handleOnSubmit, handleOnChange, searchText }) => {
  return (
    <header>
    <form onSubmit={handleOnSubmit}>
      <input
        type="search"
        placeholed="search"
        className={classes["search-bar"]}
        value={searchText}
        onChange={handleOnChange}
      />
    </form>
  </header>
  );
};
