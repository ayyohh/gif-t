import React from 'react';
import classes from './Gif.module.css';

const Gif = (props) => {
    return (
        <div className={classes.gif}>
            <p>{props.id}</p>
            <img src={props.url} alt='this a gif jah feel'/>
            <button>SAVE</button>
        </div>
    );
};

export default Gif;