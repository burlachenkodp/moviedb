import React from "react";
import classes from "./MoviesHeader.module.css";
import { Menu } from "../Menu/Menu";
import { OPEN_FORM } from "../../utils/constanst";




export const MoviesHeader = ({setShowModal}) => {
  const showDlg = () => {
    setShowModal(OPEN_FORM);
  };
  return (
    <header className={classes["main-header"]}>
<h2 >logo</h2>
<button onClick={showDlg}>LOGIN</button>
<Menu></Menu>
{/*<Login> */}
    </header>
  );
};
