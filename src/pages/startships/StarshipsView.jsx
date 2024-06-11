import NotFound from "../../assets/notFound.png";
import { Link } from "react-router-dom";
import { Pilots } from "../../components/pilots/Pilots";
import { Movies } from "../../components/movies/Movies";
export const StarshipsView = ({ data }) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${
    data.url.split("/")[5]
  }.jpg`;
  return (
    <>
      <div className="bg-black border-2 border-white-200 text-white flex justify-center space-x-8 p-2 mt-3">
        Starships
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          .
          <figure>
            <img
              src={imageUrl}
              alt={data.name}
              style={{ width: "500px", height: "300px" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = NotFound;
              }}
            />
          </figure>
          <h2 className="card-title">{data.name}</h2>
          <p>Model: {data.model}</p>
          <p>Manufacturer: {data.manufacturer}</p>
          <p>Cost: {data.cost_in_credits} credits</p>
          <div className="bg-black border-2 border-white-200 text-white flex justify-center space-x-8 p-2 mt-3">
            Pilots
          </div>
          <div className="card-body">
            <Pilots urls={data.pilots} />
          </div>
          <div className="bg-black border-2 border-white-200 text-white flex justify-center space-x-8 p-2 mt-3">
            Movies
          </div>
          <div className="card-body">
            <Movies urls={data.films} />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={"/starships"} className="hover:text-blue-400">
                Back to the List
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
