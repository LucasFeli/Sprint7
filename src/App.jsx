import { Starship } from "./components/Starship";
import { Navbar } from "./components/navbar/Navbar";
import { Navigation } from "./components/navigation/Navigation";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Navigation />
      <Starship />
    </>
  );
}

export default App;
