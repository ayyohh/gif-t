import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect, useCallback } from "react";
import GifList from "../../Components/Gifs/GifList";
import SearchBar from "./SearchBar";
import classes from "./HomeSearchPage.module.css";

const HomeSearchPage = () => {
  const { user } = useAuth0();
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [api, setAPI] = useState(
    "https://api.giphy.com/v1/gifs/trending?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&limit=16&rating=r"
  );

  const searchBarValueHandler = (searchQuery) => {
    const searchData = searchQuery;
    setAPI(
      `https://api.giphy.com/v1/gifs/search?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&q=${searchData}&limit=30&offset=10&rating=r&lang=en`
    );
    console.log(searchData);
  };

  const getInfoFromGifList = (url) => {
    console.log(url)
    console.log(user);

        const getUserID = user.sub.split("|");
        const userID = getUserID[1];

    fetch("http://localhost:5001/gifs/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url,
          user: userID,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.log("Error"));
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error("Something not good jah feel");
      }

      const data = await response.json();

      const parseData = data.data.map((gifData) => {
        return {
          id: gifData.id,
          url: gifData.images.downsized.url,
        };
      });
      setGif(parseData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [api]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={classes.mainDiv}>
      <header>
        <h1>Gif't</h1>
      </header>
      <SearchBar onSaveSearchQuery={searchBarValueHandler} />
      {!isLoading && <GifList gif={gif} onSaveGifListInfo={getInfoFromGifList} />}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default HomeSearchPage;
