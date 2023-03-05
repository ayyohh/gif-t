import React from "react";
import SavedGifs from "./SavedGifs";
import classes from "./GifList.module.css";

const SavedGifList = (props) => {
  return (
    <div className={classes.gifGrid}>
      {props.gif.map((gif) => (
        <SavedGifs key={Math.random()} url={gif} />
      ))}
    </div>
  );
};

export default SavedGifList;
