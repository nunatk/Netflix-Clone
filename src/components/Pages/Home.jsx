import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import Footer from "../Footer/Footer";
import requests from "../Api/Requests";
import Header from "../Header/Header";
import Disclaimer from "../Header/Disclamier";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Disclaimer />
      <Row title="Trending Now" fetchUrl={requests.trendingMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.topRatedMovies} />

      <Row title="Action Movies" fetchUrl={requests.action} />
      <Row title="Adventure Movies" fetchUrl={requests.adventure} />
      <Row title="Animated Movies" fetchUrl={requests.animation} />

      <Row title="Comedy Movies" fetchUrl={requests.comedy} />
      <Row title="Crime Movies" fetchUrl={requests.crime} />
      <Row title="Documentaries" fetchUrl={requests.documentary} />

      <Row title="Drama Movies" fetchUrl={requests.drama} />
      <Row title="Family Movies" fetchUrl={requests.family} />
      <Row title="Fantasy Movies" fetchUrl={requests.fantasy} />

      <Row title="Horror Movies" fetchUrl={requests.horror} />
      <Row title="Music Movies" fetchUrl={requests.music} />
      <Row title="Mystery Movies" fetchUrl={requests.mystery} />

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
  );
}
