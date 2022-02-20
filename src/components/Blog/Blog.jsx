import React from "react";
import classes from "./Blog.module.scss";
import { NavLink } from "react-router-dom";
import { ROUTE_MAIN } from "../../utils/constanst";

export const Blog = () => {
  return (
    <main className={classes["blog"]}>
     
      <div className={classes["blog__title"]}>
        <h1>Coming soon :(</h1>
        <NavLink to={ROUTE_MAIN} >Back to main page</NavLink>
      </div>
    </main>
  );
};
