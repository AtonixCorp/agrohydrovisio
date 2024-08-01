import React, { useState, useEffect, useTransition } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      fetchData()
        .then((response) => {
          setData(response);
          setError(null); // Clear any previous errors
        })
        .catch((err) => {
          console.error(err); // Log the error
          setError('Failed to fetch data');
          setData(null); // Clear any previous data
        });
    });
  }, [startTransition]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>{data ? <div>Data: {data}</div> : <div>No data available</div>}</div>
  );
};

const fetchData = async () => {
  // Simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful response
      resolve('Fetched Data');
      // Uncomment the next line to simulate an error
      // reject(new Error('Fetch error'));
    }, 2000);
  });
};

export default MyComponent;
