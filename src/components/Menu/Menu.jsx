import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_BLOG, ROUTE_MAIN } from "../../utils/constanst";
import classes from "./Menu.module.scss";

const MENU_ITEMS = [
  { path: ROUTE_MAIN, label: "MAIN" },
  { path: ROUTE_BLOG, label: "BLOG" },
];

export const Menu = () => {
  return (
    <nav className={classes["nav"]}>
      <ul className={classes["nav__menu"]} >
        {MENU_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? classes["active-link"] : ""
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
