import React from "react";
import classes from "./MoviesHeader.module.scss";
import { Menu } from "../Menu/Menu";
import { OPEN_FORM } from "../../utils/constanst";
import logo from "../../beetroot.svg";

export const MoviesHeader = ({ setShowModal }) => {
  const showDlg = () => {
    setShowModal(OPEN_FORM);
  };
  return (
    <header className={classes["header"]}>
      <div className={classes["header__container"]}>
        <div>
          <a href="https://beetroot.academy/">
            <img src={logo} width="100" height="50" alt="Logo loading" />
          </a>
        </div>
        <Menu></Menu>
        
          <button onClick={showDlg}>LOGIN</button>
        
      </div>
    </header>
  );
};
