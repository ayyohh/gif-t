import React from 'react';
import classes from './Gif.module.css';

const Gif = (props) => {


    const saveGifUrl = (url) => {
        props.onSaveGifUrl(props.url);
    }
    return (
        <div className={classes.gif}>
            <p>{props.id}</p>
            <img src={props.url} alt='this a gif jah feel'/>
            <div>
            <button onClick={saveGifUrl}>SAVE</button>
            <button>SHARE</button>
            </div>
        </div>
    );
};

export default Gif;