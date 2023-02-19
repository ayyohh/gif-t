import { useState } from "react";

const useHttp = (requestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url, {
            method: requestConfig.method,
            headers: requestConfig.headers,
            body: JSON.stringify(requestConfig.body)
        }
      );

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
  };

  return <div></div>;
};

export default useHttp;
