import React from "react";
import { Link } from "react-router-dom";
import { EMPTY_IMAGE, IMG_API } from "../../utils/constanst";

import classes from "./Movie.module.scss";

export const Movie = ({
  title,
  poster_path,
  vote_average,
  id,
}) => {
  return (
    <article className={classes["card"]}>
      <div className={classes["card__header"]}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : EMPTY_IMAGE
          }
          alt={title}
        ></img>
          </div>
        <div className={classes["card__info"]}>
          <h3>{title}</h3>
          <h3 className={classes["card__mark"]}>{vote_average}</h3>

        </div>
        <Link to={`/user/${id}`}>
          {" "}
          <button className={classes["card__button"]}>MORE INFO</button>
        </Link>
       
    
    </article>
  );
};
