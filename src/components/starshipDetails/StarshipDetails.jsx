import { useParams } from "react-router-dom";
import { useGetStarshipDetailsQuery } from "../../api/shipsApi";
import{StarshipsView} from "../../pages/startships/StarshipsView"

export const StarshipDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetStarshipDetailsQuery(id);

  if (isLoading) return <div className="loading loading-spinner loading-lg">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
        <StarshipsView data={data} />
      
    </div>
  );
};
