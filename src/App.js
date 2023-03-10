import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Login from "./pages/login/login";
import Favorites from "./pages/favorites/favorites";
import Movies from "./pages/movies/movies";
import Moviedetails from "./pages/moviedetails/moviedetails";
import Notfound from "./pages/notfound/noutfound";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Movie/:id" element={<Moviedetails />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
