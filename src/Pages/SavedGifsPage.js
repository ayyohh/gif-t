import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useCallback, useEffect } from "react";
import SavedGifList from "../Components/Gifs/SavedGifList";

import classes from './Homepage-Search/HomeSearchPage.module.css';

const SavedGifsPage = () => {
  const { user } = useAuth0();
  const [gif, setGif] = useState([]);

  const fetchGifData = useCallback(async () => {
    try {
      if (!user) {
        return null;
      } else {
        //user.sub is id from auth0, first part is google or auth so split at | and access just the number
        // which we'll use as id for user profile in our database
        const getUserID = user.sub.split("|");
        const userID = getUserID[1];

        const response = await fetch(`http://localhost:5001/gifs/`);

        if (!response.ok) {
          throw new Error("Something not good jah feel");
        }

        const data = await response.json();

        const gifArray = [];
        data.forEach((gifObject) => {
          if (gifObject.user === userID) {
            gifArray.push(gifObject.url);
            setGif(gifArray);
            
          } else {
            return;
          }
        });
      }
    } catch (error) {
      //setError(error.message);
      console.log(error);
    }
  }, [user]);

  useEffect(() => {
    fetchGifData();
  }, [fetchGifData]);

  console.log(gif);
  return (
    <div className={classes.mainDiv}>
      <h3>SavedGifsPage</h3>
      <SavedGifList gif={gif} />
   
    </div>
  );
};

export default SavedGifsPage;
