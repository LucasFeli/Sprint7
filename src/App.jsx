import { Starship } from "./components/Starship";
import { Routes, Route } from "react-router-dom";
import { IntroPage } from "./pages/introPage/IntroPage";
import { StarshipDetails } from "./components/starshipDetails/StarshipDetails";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroPage/>}></Route>
        <Route path="/starships" element={<Starship />} exact />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
