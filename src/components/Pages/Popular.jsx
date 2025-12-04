import Row from "../Row/Row";
import requests from "../Api/Requests";

export default function Popular() {
  return (
    <>
      <h1 style={{ color: "white", marginTop: "90px", marginLeft: "40px" }}>
        New & Popular
      </h1>

      <Row title="Trending Now" fetchUrl={requests.trendingMovies} />
      <Row title="New Releases" fetchUrl={requests.popularTV} />
    </>
  );
}
