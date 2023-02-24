import React from 'react';
import classes from './Gif.module.css';

const Gif = (props) => {
    return (
        <div className={classes.gif}>
            <p>{props.id}</p>
            <img src={props.url} alt='this a gif jah feel'/>
            <div>
            <button>SAVE</button>
            <button>SHARE</button>
            </div>
        </div>
    );
};

export default Gif;