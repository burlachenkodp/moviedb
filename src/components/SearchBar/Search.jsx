import React from "react";
import classes from "./Search.module.scss";


export const Search = ({ handleOnSubmit, handleOnChange, searchText }) => {
  return (
    <section className={classes["search-block"]}>
    <form onSubmit={handleOnSubmit}>
      <input
        type="search"
        placeholed="search"
        className={classes["search-block__input"]}
        value={searchText}
        onChange={handleOnChange}
      />
      <button className={classes["search-block__button"]}>SEARCH</button>
    </form>
  </section>
  );
};
