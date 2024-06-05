import { Starship } from "./components/Starship";
import { Routes, Route } from "react-router-dom";
import { IntroPage } from "./pages/introPage/IntroPage";
import { StarshipDetails } from "./components/starshipDetails/StarshipDetails";
import { Navbar } from "./components/navbar/Navbar";
import { Navigation } from "./components/navigation/Navigation";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/starships" element={<Starship />} exact />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
