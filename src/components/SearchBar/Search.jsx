import React from "react";
import classes from "./Search.module.scss";


export const Search = ({ handleOnSubmit, handleOnChange, searchText }) => {
  return (
    <section>
    <form onSubmit={handleOnSubmit}>
      <input
        type="search"
        placeholed="search"
        className={classes["search-bar"]}
        value={searchText}
        onChange={handleOnChange}
      />
      <button>SEARCH</button>
    </form>
  </section>
  );
};
