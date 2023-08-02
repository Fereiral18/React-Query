import { useEffect, useState } from "react";

export const SuperHeroesPage = () => {
  const url = "http://localhost:4000/superheroes";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  console.log(data);

  return (
    <>
      {error && <h2>Error: {error}</h2>}
      {loading && <h2>loading..</h2>}
      <h2>Super Heroes</h2>
      {data?.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};
