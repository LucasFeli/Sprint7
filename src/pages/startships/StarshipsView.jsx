export const StarshipsView = ({ data }) => {
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${data.url.split('/')[5]}.jpg`;
  return (
    <div>
      Starships
      <h1>{data.name}</h1>
      <img src={imageUrl} alt={data.name} style={{ width: '300px', height: '300px' }} />
      <p>Model: {data.model}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Cost: {data.cost_in_credits} credits</p>
    </div>
  );
};
