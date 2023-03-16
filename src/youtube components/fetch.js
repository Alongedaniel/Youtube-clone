import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [itemData, setItemData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch this resource");
        }
        return res.json();
      })
      .then((items) => {
        setItemData({ item: items.items });
        setIsFetched(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { itemData, isFetched, error, isLoading };
};

export default useFetch;
