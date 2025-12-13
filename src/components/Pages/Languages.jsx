import React from "react";
import Row from "../Row/Row";
import requests from "../Api/Requests";
import "./Languages.css"; 

export default function Languages() {
  return (
    <div className="languages-page">
      <h2 className="languages-title">Select Your Preferences</h2>

      <div className="language-select-row">
        {/* Original Language */}
        <div className="language-box">
          <label className="language-label">Original Language</label>
          <select className="language-dropdown">
            <option>English</option>
            <option>Amharic</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>

        {/* Audio Language */}
        <div className="language-box">
          <label className="language-label">Audio Language</label>
          <select className="language-dropdown">
            <option>English</option>
            <option>Amharic</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>

      {/* ROWS */}
      <Row title="Suggested For You" fetchUrl={requests.popularTV} />
      <Row title="Popular Worldwide" fetchUrl={requests.trendingTV} />
      <Row title="Trending in Your Language" fetchUrl={requests.trendingMovies} />
    </div>
  );
}
