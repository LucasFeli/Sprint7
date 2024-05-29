import { Link } from "react-router-dom";


export const Navigation = () => {
  return (
    <div className="bg-black text-white flex justify-center space-x-8 p-2">
    <Link to={"/"} className="hover:text-blue-400">Home</Link>
    <Link to={"/starships"} className="hover:text-blue-400">Starships</Link>
  </div>
  )
}

 