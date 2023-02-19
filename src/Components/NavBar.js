import React from 'react';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={classes.navBar}>
            <button>Home</button>
            <div>Saved</div>
            <div>Profile</div>
        </header>
    );
};

export default NavBar;