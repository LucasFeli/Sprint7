import NotFound from "../../assets/notFound.png";
import { Link } from "react-router-dom";


export const StarshipsView = ({ data }) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${data.url.split('/')[5]}.jpg`;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="card w-96 glass">
  <figure><img src={imageUrl} alt={data.name} style={{ width: '500px', height: '300px' }}
   onError={(e) => {
    e.target.onerror = null; 
    e.target.src = NotFound;
  }}/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>Model: {data.model}</p>
<p>Manufacturer: {data.manufacturer}</p>
      <p>Cost: {data.cost_in_credits} credits</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={"/starships"} className="hover:text-blue-400">Back to the List</Link></button>
    </div>
  </div>
</div>
    </div>
    
  );
};
