import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="bg-black border-2 border-white-200 text-white flex justify-center space-x-8 p-2">
      <div className="">
        <Link to={"/"} className="hover:text-blue-400 ">
          Home
        </Link>
      </div>

      <Link to={"/starships"} className="hover:text-blue-400">
        Starships
      </Link>
    </div>
  );
};
