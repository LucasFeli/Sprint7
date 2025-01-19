import { Starship } from "./components/starship/Starship";
import { Routes, Route } from "react-router-dom";
import { IntroPage } from "./pages/introPage/IntroPage";
import { StarshipDetails } from "./components/starshipDetails/StarshipDetails";
import { Navbar } from "./components/navbar/Navbar";
import { Navigation } from "./components/navigation/Navigation";
import { Register } from "./components/register/Register";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { Login } from "./components/login/Login";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Navigation />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<IntroPage />} />
          <Route
            path="/starships"
            element={
              
                <Starship />
              
            }
          />
          <Route
            path="starships/:id"
            element={
              
                <StarshipDetails />
              
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
