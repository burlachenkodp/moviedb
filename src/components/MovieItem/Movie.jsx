import React from "react";
import { Link } from "react-router-dom";
import { EMPTY_IMAGE, IMG_API } from "../../utils/constanst";

import classes from "./Movie.module.css";

export const Movie = ({
  title,
  poster_path,
  vote_average,
  id,
}) => {
  return (
    <article className={classes["movie-card"]}>
      <div className={classes["movie-header"]}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : EMPTY_IMAGE
          }
          alt={title}
        ></img>
        <div className={classes["movie-info"]}>
          <h3>{title}</h3>
          <span className={classes["mark"]}>{vote_average}</span>
        </div>
        <Link to={`/user/${id}`}>
          {" "}
          <button>more info</button>
        </Link>
      </div>
    </article>
  );
};
