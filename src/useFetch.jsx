import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  console.log("useFetch called");

  useEffect(() => {
    
    const getData = async () => {
      console.log("useEffect HTTP Fetch called");
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${url}`
        );
        const data = await response.json();
        setData(data.splice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return [data];
};

export default useFetch;
