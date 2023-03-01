import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "../Buttons/LoginButton";
import { LogoutButton } from "../Buttons/LogoutButton";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

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

      {!isAuthenticated && (
        <div>
          <LoginButton />
        </div>
      )}
      {isAuthenticated && (
        <div>
          <LogoutButton />
        </div>
      )}
    </header>
  );
};

export default NavBar;
