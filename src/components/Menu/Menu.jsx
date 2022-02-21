import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ROUTE_BLOG, ROUTE_MAIN } from "../../utils/constanst";
import Hamburger from "../Hamburger/Hamburger";

const MENU_ITEMS = [
  { path: ROUTE_MAIN, label: "MAIN" },
  { path: ROUTE_BLOG, label: "BLOG" },
];

export const Menu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);


  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <div>
      <div className="navigation">
        <ul >
          {MENU_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={(isActive) =>
                  !isActive ? "active-link" : "usual-link"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>
      <style jsx="true">{`
     
     .navigation {
      width: 100%;
      height: 50px;
    }
        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
        }
        .navigation ul li {
          list-style-type: none;
        }
        .navigation a {
          text-decoration: none;
          display: inline-block;
          color:#354ebf;
          padding: 10px 20px;
          margin: 10px 10px;
          border-radius: 4px;
          font-weight: 700;

        
        }
        .navigation a:hover {
          background-color: #d3e3fc;
        }
        .navigation a:active {
          background-color: #00887a;
          color: #FFF;
        }
        .usual-link {
          background-color: #fff;
        }
        .active-link {
          background-color: #00887a;
       
        }
    

        .hamburger {
          display: none;
          z-index: 6;
        }

        @media (max-width: 767px) {
          .hamburger {
            display: block;
            padding-top: 8px;
            margin-left: 10px;
            z-index: 6;
          }

          .navigation ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: rgba(255, 255, 255, 0.5);
            height: 100vh;
            width: 50vw;
            margin-top: 66px;
            position: fixed;
          }
    
          .navigation a {
           
              margin: 0;
              width: 100%;
              border-radius: 0;
              border-bottom: 3px solid #071347;
            }
        
        @media (max-width: 500px) {
          .navigation ul {
            
            height: 100vh;
            width: 100vw;
            min-width: 320px;
            margin-top: 66px;
            position: fixed;
          }
        }
      `}</style>
    </div>
  );
};
