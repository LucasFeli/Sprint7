import { useGetFilmDetailsQuery } from "../../api/shipsApi";
import NotFound from "../../assets/notFound.png";

export const Movies = ({ urls }) => {
  return (
    <>
      {urls.map((url) => {
        const id = url.split("/")[5];
        return <Movie key={id} id={id} />;
      })}
    </>
  );
};

const Movie = ({ id }) => {
  const { data, error, isLoading } = useGetFilmDetailsQuery(id);

  if (isLoading)
    return <div className="loading loading-spinner loading-sm">Loading...</div>;
  if (error) return <div>Error loading movie</div>;

  const imageUrl = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;

  return (
    <div className="card glass shadow-xl">
      <figure>
        <img
          src={imageUrl}
          alt={data.title}
          style={{ width: "200px", height: "300px" }}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = NotFound;
          }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>Episode: {data.episode_id}</p>
      </div>
    </div>
  );
};
