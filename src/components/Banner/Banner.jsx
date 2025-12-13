import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import { VolumeOff, VolumeUp, PlayArrow, InfoOutlined } from "@mui/icons-material";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);

  const savedMute = localStorage.getItem("bannerMute");
  const [isMuted, setIsMuted] = useState(savedMute === "false" ? false : true);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const res = await Api.get("/trending/movie/week");
        const random =
          res.data.results[Math.floor(Math.random() * res.data.results.length)];
        setMovie(random);

        const vid = await Api.get(`/movie/${random.id}/videos`);
        const trailer = vid.data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );

        setVideoKey(trailer ? trailer.key : null);
      } catch (err) {
        console.log("Banner error:", err);
      }
    };

    loadMovie();
  }, []);

  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    localStorage.setItem("bannerMute", newMute);
  };

  if (!movie) return null;

  return (
    <header
      className="banner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BACKGROUND IMAGE */}
      <div
        className={`banner-image ${isHovered ? "hide" : "show"}`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      ></div>

      {/* TRAILER */}
      {videoKey && isHovered && (
        <iframe
          className="banner-video"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=${
            isMuted ? 1 : 0
          }&controls=0`}
          allow="autoplay; encrypted-media"
        ></iframe>
      )}

      {/* CONTENT (fixed) */}
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie.title || movie.name || movie.original_name}
        </h1>

        <p className="banner-description">
          {movie.overview?.slice(0, 200)}...
        </p>

        <div className="banner-buttons">
          <button className="banner-btn play">
            <PlayArrow /> Play
          </button>

          <button className="banner-btn info">
            <InfoOutlined /> More Info
          </button>
        </div>
      </div>

      {/* MUTE BUTTON */}
      <button className="mute-btn" onClick={toggleMute}>
        {isMuted ? <VolumeOff /> : <VolumeUp />}
      </button>

      <div className="banner-fadeBottom"></div>
    </header>
  );
}
