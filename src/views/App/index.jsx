import { Route, Routes } from "react-router-dom";
import Explore from "../Explore";
import Home from "../Home";
import Navigation from "../../components/NavBar";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </>
  );
}

export default App;
