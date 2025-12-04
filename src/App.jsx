import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import requests from "./components/Api/Requests";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import Top10Row from "./components/Top10Row/Top10Row";


import Home from "./components/Pages/Home";
import Shows from "./components/Pages/Shows";
import Movies from "./components/Pages/Movies";
import Games from "./components/Pages/Games";
import Popular from "./components/Pages/Popular";
import MyList from "./components/Pages/MyList";
import Languages from "./components/Pages/Languages";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />

              <Row title="Trending Now" fetchUrl={requests.trendingMovies} />
              <Row title="Top Rated Movies" fetchUrl={requests.topRatedMovies} />

              <Row title="Action Movies" fetchUrl={requests.action} />
              <Row title="Adventure Movies" fetchUrl={requests.adventure} />
              <Row title="Animated Movies" fetchUrl={requests.animation} />

              <Row title="Comedy Movies" fetchUrl={requests.comedy} />
              <Row title="Crime Movies" fetchUrl={requests.crime} />
              <Row title="Documentaries" fetchUrl={requests.documentary} />
              <Top10Row title="Top 10 Movies Today" fetchUrl={requests.top10Movies} isLarge />
             
              <Row title="Drama Movies" fetchUrl={requests.drama} />
              <Row title="Family Movies" fetchUrl={requests.family} />
              <Row title="Fantasy Movies" fetchUrl={requests.fantasy} />

              <Row title="Horror Movies" fetchUrl={requests.horror} />
              <Row title="Music Movies" fetchUrl={requests.music} />
              <Row title="Mystery Movies" fetchUrl={requests.mystery} />

              <Top10Row title="Top 10 TV Shows Today" fetchUrl={requests.top10TV} isLarge />
              <Row title="Romance Movies" fetchUrl={requests.romance} />
              <Row title="Sci-Fi Movies" fetchUrl={requests.scienceFiction} />
              <Row title="TV Movies" fetchUrl={requests.tvMovie} />

              <Row title="Thriller Movies" fetchUrl={requests.thriller} />
              <Row title="War Movies" fetchUrl={requests.war} />
              <Row title="Western Movies" fetchUrl={requests.western} />

              <Row title="Trending TV Shows" fetchUrl={requests.trendingTV} />
              <Row title="Top Rated TV" fetchUrl={requests.topRatedTV} />
              <Row title="Popular TV Shows" fetchUrl={requests.popularTV} />

              <Footer />
            </>
          }
        />

        <Route path="/shows" element={<Shows />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/games" element={<Games />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/languages" element={<Languages />} />
      </Routes>
    </Router>
  );
}

export default App;
