import Row from "../Row/Row";
import requests from "../Api/Requests";

export default function Movies() {
  return (
    <>
      <h1 style={{ color: "white", marginTop: "90px", marginLeft: "40px" }}>
        Movies
      </h1>

      <Row title="Trending Movies" fetchUrl={requests.trendingMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.topRatedMovies} />

      <Row title="Action" fetchUrl={requests.action} />
      <Row title="Comedy" fetchUrl={requests.comedy} />
      <Row title="Drama" fetchUrl={requests.drama} />
      <Row title="Horror" fetchUrl={requests.horror} />
    </>
  );
}
