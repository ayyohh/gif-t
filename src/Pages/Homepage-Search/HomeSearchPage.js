import React, { useState, useEffect, useCallback } from "react";
import GifList from "../../Components/Gifs/GifList";
import SearchBar from "./SearchBar";
import classes from './HomeSearchPage.module.css';

const HomeSearchPage = () => {
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [api, setAPI] = useState(
    "https://api.giphy.com/v1/gifs/trending?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&limit=10&rating=r"
  );

  const searchBarValueHandler = (searchQuery) => {
    const searchData = searchQuery;
    setAPI(
      `https://api.giphy.com/v1/gifs/search?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&q=${searchData}&limit=20&offset=10&rating=r&lang=en`
    );
    console.log(searchData);
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
      {!isLoading && <GifList gif={gif} />}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default HomeSearchPage;
