import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
    return (
        <ul>
            {props.gif.map((gif) => (
                <Gif
                    key={gif.id}
                    url={gif.url}
                />
            ))}
        </ul>
    );
};

export default GifList;