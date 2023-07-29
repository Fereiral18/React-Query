import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });
  if (isLoading) return <h2>Loading...</h2>;
  console.log(isLoading);
  return (
    <>
      <h2>RQSuperHeroesPage</h2>
      <hr />
      {data?.data.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </>
  );
};
