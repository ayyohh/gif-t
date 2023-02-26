import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={classes.navBar}>
      <div className={classes.linkButtons}>
        <Link to="/">HOME</Link>
      </div>
      <div className={classes.linkButtons}>
        <Link to="/savedgifs">SAVED</Link>
      </div>
      <div className={classes.linkButtons}>
        <Link to="/profile">PROFILE</Link>
      </div>
    </header>
  );
};

export default NavBar;
