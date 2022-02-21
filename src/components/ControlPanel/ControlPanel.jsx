import React from "react";
import { Filter } from "../Filter/Filter";
import { Search } from "../SearchBar/Search";
import classes from "./ControlPanel.module.scss";


export const ControlPanel = ({
  handleOnSubmit,
  handleOnChange,
  searchText,
  typeSort,
  setTypeSort,
  lang,
  setLang,
}) => {
  return (
    <div className="container">
    <section className={classes["control-panel-container"]}>
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
    </section>
    </div>
  );
};


