import StarWarslogo from "../../assets/StarWarslogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";

export const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error logging out", error.message);
    }
  };
  return (
    <>
      <div className="container mx-auto flex items-center">
        <div className="flex-1">
          <img
            src={StarWarslogo}
            alt="Star Wars Logo"
            className="justify-center"
            style={{ height: "150px" }}
          />
        </div>

        <div className="flex space-x-4">
          {currentUser ? (
            <button onClick={handleLogout} className="hover:underline">
              LOGOUT
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <h2 className="hover:underline">LOGIN</h2>
              </Link>
              <Link to={"/register"}>
                <h2 className="hover:underline">SINGUP</h2>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
