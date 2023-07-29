import { useEffect, useState } from "react";

export const SuperHeroesPage = () => {
  const url = "http://localhost:4000/superheroes";
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setData(response));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  console.log(data);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <h2>Super Heroes</h2>
      {data?.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </>
  );
};
