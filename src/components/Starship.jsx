import { useGetStarshipsQuery } from "../api/shipsApi";
import { Pagination } from "./pagination/Pagination";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Navigation } from "./navigation/Navigation";

export const Starship = () => {
  const { page } = useSelector((state) => state.starships);
  const { data, isLoading, error } = useGetStarshipsQuery(page);

  if (isLoading)
    return <div className="loading loading-spinner loading-lg">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Navbar />
      <Navigation />
      {data.results.map((ships) => {
        const id = ships.url.split("/")[5];
        const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
        return (
          <div key={ships.name}>
            <Link to={`/starships/${id}`}>{ships.name}</Link>
            <img src={imageUrl} alt={ships.name} style={{ width: '100px', height: '100px' }} />
          </div>
        );
      })}
      <Pagination />
    </>
  );
};
