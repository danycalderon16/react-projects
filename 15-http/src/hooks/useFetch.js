import React, { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValuie) {
  const [data, setData] = useState(initialValuie);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError({ messge: error.messge || "Failed to fetch data" });
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, [fetchFn]);

  return {
    data,
    isFetching,
    setData,
    error,
  };
}
