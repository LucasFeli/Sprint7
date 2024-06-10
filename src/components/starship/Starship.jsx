import { useGetStarshipsQuery } from "../../api/shipsApi";
import { Pagination } from "../pagination/Pagination";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NotFound from "../../assets/notFound.png";

export const Starship = () => {
  const { page } = useSelector((state) => state.starships);
  const { data, isLoading, error } = useGetStarshipsQuery(page);

  if (isLoading)
    return <div className="loading loading-spinner loading-lg">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {data.results.map((ships) => {
        const id = ships.url.split("/")[5];
        const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
        return (
          <div
            key={ships.name}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={imageUrl}
                alt={ships.name}
                style={{ width: "300px", height: "200px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = NotFound;
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{ships.name}</h2>
              <p>{ships.manufacturer}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <Link to={`/starships/${id}`}>More Info</Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Pagination />
    </>
  );
};
