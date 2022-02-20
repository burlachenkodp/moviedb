import React, { useEffect, useState, useMemo } from "react";
import { Movie } from "../MovieItem/Movie";
import { sortList } from "../../utils/helpers";
import { ControlPanel } from "../ControlPanel/ControlPanel";

import classes from "./MovieList.module.scss";

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

  const sortedArray = useMemo(() => {
    if (lang === "language") return movies;

    const temp = movies.filter((item) =>
      item.original_language.toLowerCase().includes(lang)
    );
    return temp;
  }, [lang, movies]);

  const MoviesArray = sortList(typeSort, sortedArray);

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
    <main>
      <ControlPanel
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        searchText={searchText}
        typeSort={typeSort}
        setTypeSort={setTypeSort}
        lang={lang}
        setLang={setLang}
      ></ControlPanel>

      <section className={classes["main-container"]}>
        <section className={classes["movie-container"]}>
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
            <h1>LOOK IN NEXT PAGE</h1>
          )}
        </section>
        <div className={classes["pagination"]}>
          <div>
            {" "}
            <button onClick={() => setPage(prevPage)}>PREV</button>
          </div>
          <div>
            <span>{page}</span>
          </div>
          <div>
            {" "}
            <button onClick={() => setPage(nextPage)}>NEXT</button>
          </div>
        </div>
      </section>
    </main>
  );
};
