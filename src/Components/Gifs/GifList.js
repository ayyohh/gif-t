import React from 'react';
import Gif from './Gif';
import classes from './GifList.module.css';
const GifList = (props) => {

    const saveGifUrl = (url) => {
        props.onSaveGifListInfo(url);
    }
    return (
        <div className={classes.gifGrid}>
            {props.gif.map((gif) => (
                <Gif
                    key={gif.id}
                    url={gif.url}
                    onSaveGifUrl={saveGifUrl}
                />
            ))}
        </div>
    );
};

export default GifList;