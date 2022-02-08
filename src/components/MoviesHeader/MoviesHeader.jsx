import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_BLOG, ROUTE_MAIN, ROUTE_SEARCH } from "../../utils/constanst";
import classes from "./MoviesHeader.module.css";

const MENU_ITEMS = [
  { path: ROUTE_MAIN, label: "Main" },
  { path: ROUTE_BLOG, label: "Blog" },
  { path: ROUTE_SEARCH, label: "Search" },
];

export const MoviesHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <nav className={classes["menu"]}>
        <ul>
          {MENU_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
          <li>
            <NavLink to={ROUTE_MAIN}>MOVIES</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
