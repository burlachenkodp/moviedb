import React, { useState } from "react";
import classes from "./MoviesFooter.module.scss";
import iconSet from "../../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";



export const MoviesFooter = () => {

  const [color, setColor] = useState('red');


  function changeBackground(e) {
    setColor("green")
  }
  function changeColor(e) {
    setColor("red")
  }

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
              <IcomoonReact
                iconSet={iconSet}
                color="#444"
                size={40}
                icon="telegram"
                
              />
            </a>
          </div>
          <div>
            <a href="https://github.com" className={classes["socials__link"]}>
              <IcomoonReact
                iconSet={iconSet}
                color= {color}
                size={40}
                icon="github"
                onMouseOver={changeBackground}
                onMouseOut={changeColor}

              />
            </a>
          </div>
          <div>
            <a href="https://github.com" className={classes["socials__link"]}>
              <IcomoonReact
                iconSet={iconSet}
                color="#444"
                size={40}
                icon="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
