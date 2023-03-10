import React from 'react';
import classes from './Gif.module.css';

const Gif = (props) => {

    const share = () => {
        navigator.share({
            url: props.url,
        });
    }


    const saveGifUrl = (url) => {
        props.onSaveGifUrl(props.url);
    }
    return (
        <div className={classes.gif}>
        
            <img src={props.url} alt='this a gif jah feel'/>
            <div>
            <button onClick={saveGifUrl}>SAVE</button>
            <button onClick={share}>SHARE</button>
            </div>
        </div>
    );
};

export default Gif;