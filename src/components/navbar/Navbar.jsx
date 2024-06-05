import StarWarslogo from "../../assets/StarWarslogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <div className="container mx-auto flex items-center">
      <div className="flex-1">
      <img src={StarWarslogo} alt="Star Wars Logo"  className="justify-center" style={{ height: "150px" }} />
      
      </div>
      
      <div className="flex space-x-4">
      <Link to={"/login"}><h2 className="hover:underline">LOGIN</h2></Link>
      <Link to={"/register"}><h2 className="hover:underline">SINGUP</h2></Link>
      
      </div>
      
      </div>
    </>
  );
};
