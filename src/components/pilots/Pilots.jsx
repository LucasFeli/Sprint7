import { useGetPilotDetailsQuery } from "../../api/shipsApi";
import NotFound from "../../assets/notFound.png";

export const Pilots = ({ urls }) => {
  return (
    <div>
      <h2>Pilots</h2>
      <ul>
        {urls.map((url) => {
          const id = url.split("/")[5];
          return <Pilot key={id} id={id} />;
        })}
      </ul>
    </div>
  );
};

const Pilot = ({ id }) => {
  const { data, error, isLoading } = useGetPilotDetailsQuery(id);

  if (isLoading) return <li>Loading...</li>;
  if (error) return <li>Error loading pilot</li>;

  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl ">
      <img
        src={imageUrl}
        alt={data.name}
        style={{ width: "200px", height: "300px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = NotFound;
        }}
      />
      <p className="card-title">{data.name}</p>
    </div>
  );
};
