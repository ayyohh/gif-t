import React from 'react';
import classes from './Gif.module.css';

const Gif = (props) => {
    return (
        <li className={classes.gif}>
            <p>{props.id}</p>
            <img src={props.url} alt='this a gif jah feel'/>
        </li>
    );
};

export default Gif;