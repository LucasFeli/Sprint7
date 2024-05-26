import StarWarslogo from "../../assets/StarWarslogo.png";

export const Navbar = () => {
  return (
    <>
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <img src={StarWarslogo} alt="Star Wars Logo"  className="justify-center" style={{ height: "150px" }} />
      <div className="flex space-x-4">
      <h2 className="hover:underline">LOGIN</h2>
      <h2 className="hover:underline">SINGUP</h2>
      </div>
      
      </div>
    </>
  );
};
