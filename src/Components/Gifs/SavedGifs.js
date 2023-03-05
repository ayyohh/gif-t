import React from 'react';
import classes from './Gif.module.css';

const SavedGifs = (props) => {

    const share = () => {
        navigator.share({
            url: props.url,
        });
    }


    console.log(props);
    return (
        <div className={classes.gif}>
            <img src={props.url} alt='this a gif jah feel'/>
            <div>
            <button onClick={share}>SHARE</button>
            </div>
        </div>
    );
};

export default SavedGifs;