import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import SearchBar from "./SearchBar";

const HomeSearchPage = () => {
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [api, setAPI] = useState('https://api.giphy.com/v1/gifs/trending?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&limit=25&rating=r')

  useEffect(() => {
    fetchData();
  }, []);

  const searchBarValueHandler = (searchQuery) => {
      const searchData = searchQuery;
      console.log(searchData);
  }

  //const apiURL =
   // "https://api.giphy.com/v1/gifs/trending?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&limit=25&rating=r";

  //const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&q=leonardo+dicaprio&limit=25&offset=10&rating=r&lang=en'

  const fetchData = async () => {
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
          url: gifData.images.fixed_width.url,
        };
      });
      setGif(parseData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  return (
    <div>
      <header>Popular Gifs</header>
      <SearchBar onSaveSearchQuery={searchBarValueHandler}/>
      {!isLoading && <GifList gif={gif} />}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default HomeSearchPage;
