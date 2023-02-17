import React, { useState, useEffect } from "react";
import GifList from "./GifList";

const TopTenGif = () => {
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [])

  const apiURL =
    "https://api.giphy.com/v1/gifs/trending?api_key=ex0CE5B4EQlLcMGN3vFU5NaEzdiVnJV9&limit=10&rating=r";

  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(apiURL);

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
  }

  return (
    <div>
      <header>Top Ten Gifs</header>
      <button onClick={fetchData}>fetch data</button>
      {!isLoading && <GifList gif={gif} />}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default TopTenGif;
