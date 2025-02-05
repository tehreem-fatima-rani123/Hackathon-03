import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = encodeURIComponent('*[_type == "post"]{title, body}');
        const response = await fetch(
          `https://<yourProjectId>.api.sanity.io/v2023-01-01/data/query/<yourDataset>?query=${query}`
        );
        const result = await response.json();
        setData(result.result); // Sanity API se result.result milta hai
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Sanity Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
