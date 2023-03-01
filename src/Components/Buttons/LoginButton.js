import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import classes from '../Navbar/NavBar.module.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className={classes.loginButton} onClick={handleLogin}>
      LOG IN
    </button>
  );
};