import React from 'react';
import Gif from './Gif';
import classes from './GifList.module.css';
const GifList = (props) => {
    return (
        <div className={classes.gifGrid}>
            {props.gif.map((gif) => (
                <Gif
                    key={gif.id}
                    url={gif.url}
                />
            ))}
        </div>
    );
};

export default GifList;