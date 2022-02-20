import React from "react";
import { Link } from "react-router-dom";
import {  IMG_API } from "../../utils/constanst";
import popcorn from "../../pop-corn.jpg";


import classes from "./Movie.module.scss";

export const Movie = ({ title, poster_path, vote_average, id }) => {
  return (
    <article className={classes["card"]}>
      <div className={classes["card__header"]}>
        <img
          src={poster_path ? IMG_API + poster_path : popcorn}
          alt={title}
        ></img>
      </div>
      <div className={classes["card__info"]}>
      <div className={classes["card__title-wrap"]}>
        <h3 className={classes["card__title"]}>{title}</h3>
        </div>
        <div className={classes["card__mark-wrap"]}>
          <span className={classes["card__mark"]}>{vote_average}</span>
        </div>
      </div>
      <Link to={`/user/${id}`}>
        {" "}
        <button className={classes["card__button"]}>More Info</button>
      </Link>
    </article>
  );
};
