import Banner from "../Banner/Banner";
import Row from "../Row/Row";

import requests from "../Api/Requests";

export default function Home() {
  return (
    <>
      <Banner />

      <Top10Row title="Top 10 Movies Today" fetchUrl={requests.top10Movies} isLarge />
      <Top10Row title="Top 10 TV Shows Today" fetchUrl={requests.top10TV} isLarge />

      <Row title="Trending Now" fetchUrl={requests.trendingMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.topRatedMovies} />

      <Row title="Action Movies" fetchUrl={requests.action} />
      <Row title="Adventure Movies" fetchUrl={requests.adventure} />
      <Row title="Comedy Movies" fetchUrl={requests.comedy} />
    </>
  );
}
