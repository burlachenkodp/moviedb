import React, { useEffect, useState } from "react";
import { Movie } from "../MovieItem/Movie";
import { sortList } from "../../utils/helpers";
import { ControlPanel } from "../ControlPanel/ControlPanel";

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
  useEffect(()=> {

    
  }, [lang]);
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

      <section>
        <div>
          <button onClick={() => setPage(prevPage)}>prev</button>
          <span>{page}</span>
          <button onClick={() => setPage(nextPage)}>next</button>
        </div>
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
      </section>
    </main>
  );
};
