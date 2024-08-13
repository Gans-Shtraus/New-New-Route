import React from "react";

import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className={s.NavBar}>
        <NavLink to="/profile" className={s.appLink}>
          <p>Profile</p>
        </NavLink>
        <NavLink to="/blog" className={s.appLink}>
          <p>Blog</p>
        </NavLink>
        <NavLink to="/about" className={s.appLink}>
          <p>About me</p>
        </NavLink>
        <NavLink to="/family" className={s.appLink}>
          <p>My Family</p>
        </NavLink>
      </nav>
    </>
  );
};

export { NavBar };
