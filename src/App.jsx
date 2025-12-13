import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Pages/Home";
import Shows from "./components/Pages/Shows";
import Movies from "./components/Pages/Movies";
import Games from "./components/Pages/Games";
import Popular from "./components/Pages/Popular";
import MyList from "./components/Pages/MyList";
import Languages from "./components/Pages/Languages";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 

        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/games" element={<Games />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/languages" element={<Languages />} />
      </Routes>
    </>
  );
}

export default App;
