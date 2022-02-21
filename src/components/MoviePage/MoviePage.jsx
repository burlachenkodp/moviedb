import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { APIKEY,  PAGE_IMG, MAIN_URL } from "../../utils/constanst";
import classes from "./MoviePage.module.scss";
import popcorn from "../../pop-corn.jpg";


export const MovieCard = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    fetch(MAIN_URL + `/movie/${id}?api_key=` + APIKEY)
      .then((response) => response.json())
      .then((json) => {
        let temp = json;
        setUserInfo(temp);
      });
  }, [id]);
  const next = Number(id) + 1;

  return (
    <main className={classes["container"]}>
      {userInfo ? (
        <div className={classes["moviepaige"]}>
          <div>
            <img
              src={
                (userInfo.poster_path !== null)
                  ? PAGE_IMG + userInfo.poster_path
                  : popcorn
              }
              alt={"title"}
            ></img>
          </div>
          <div className={classes["moviepaige__info"]}>
            <div className={classes["moviepaige__header"]}>
              <h1>{userInfo.title}</h1>
              {userInfo.tagline ? <h2>Tagline: {userInfo.tagline}</h2> : <></>}
            </div>
            <div className={classes["moviepaige__text"]}>
              {userInfo.release_date ? (
                <h3>Year: {userInfo.release_date.slice(0, 4)}</h3>
              ) : (
                <></>
              )}

              <p>{userInfo.overview}</p>
            </div>
            <div className={classes["moviepaige__buttons"]}>
            <Link to={`/`}>
              <button className={classes["moviepaige__button"]}>
                To main page
              </button>
            </Link>

            <Link to={`/user/${next}`}>
              <button className={classes["moviepaige__button"]}>
                Random movie
              </button>
            </Link>
          </div>
          </div>
         
        </div>
      ) : (
        <p>LOADING...</p>
      )}
    </main>
  );
};
