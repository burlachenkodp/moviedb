import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_BLOG, ROUTE_MAIN } from "../../utils/constanst";
import classes from "./Menu.module.css";

const MENU_ITEMS = [
  { path: ROUTE_MAIN, label: "Main" },
  { path: ROUTE_BLOG, label: "Blog" },
];

export const Menu = () => {
  return (
    <nav className={classes["menu-course"]}>
      <ul>
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
