import React from "react";
import { Link } from "react-router-dom";

import classes from "./Movie.module.css";

const IMG_API = "https://image.tmdb.org/t/p/w300";

export const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  setShowModal,
  id,
}) => {
 
  return (
    <div className={classes["movie-card"]}>
      <div className={classes["movie-header"]}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : "https://media.istockphoto.com/photos/japanese-family-taking-picture-at-tofukuji-temple-kyoto-picture-id629388592?k=20&m=629388592&s=612x612&w=0&h=cfWl3ds8i4UtqtXeRp4_Wg830gXciEfT__JAjD0yMo4="
          }
          alt={title}
        ></img>
        <div className={classes["movie-info"]}>
          <h3>{title}</h3>
          <span className={classes["mark"]}>{vote_average}</span>
        </div>
        <Link to={`/user/${id}`}> <button >more info</button></Link>
       
      </div>
    </div>
  );
};
