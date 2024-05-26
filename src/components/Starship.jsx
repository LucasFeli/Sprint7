import { useGetStarshipsQuery  } from "../api/shipsApi";
import { Pagination } from "./pagination/Pagination";
import { useSelector } from "react-redux";

export const Starship = () => {
  const { page } = useSelector((state) => state.starships);
  const { data , isLoading, error } = useGetStarshipsQuery (page);

  if (isLoading)
    return <div className="loading loading-spinner loading-lg">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {data.results.map((ships) => (
        <div key={ships.name}>
          <div className="soverflow-x-autotats shadow  ">
            <div className="stat">
              <h1 className="font-bold">{ships.name}</h1>
              <h2>{ships.model}</h2>
            </div>
          </div>
          
        </div>
        
      ))}
      <Pagination />
    </>
  );
};
