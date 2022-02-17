import React from "react";
import classes from "./MoviesFooter.module.scss";
import { ImGithub, ImLinkedin, ImTelegram } from "react-icons/im";

export const MoviesFooter = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer__container"]}>
        <div className={classes["footer__title"]}>
          <h1>Dima Burlachenko</h1>
          <h2>Contact me:</h2>
        </div>
        <div className={classes["socials"]}>
          <div>
            <a href="https://github.com" className={classes["socials__link"]}>
              <ImLinkedin size={40}/>
            </a>
          </div>
          <div>
            <a href="https://github.com" className={classes["socials__link"]}>
              <ImGithub size={40}/>
            </a>
          </div>
          <div>
            <a href="https://github.com" className={classes["socials__link"]}>
              <ImTelegram size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
