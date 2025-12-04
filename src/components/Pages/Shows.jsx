import Row from "../Row/Row";
import requests from "../Api/Requests";

export default function Shows() {
  return (
    <>
      <h1 style={{ color: "white", marginTop: "90px", marginLeft: "40px" }}>
        TV Shows
      </h1>

      <Row title="Trending TV Shows" fetchUrl={requests.trendingTV} />
      <Row title="Top Rated TV Shows" fetchUrl={requests.topRatedTV} />
      <Row title="Popular TV Shows" fetchUrl={requests.popularTV} />
    </>
  );
}
