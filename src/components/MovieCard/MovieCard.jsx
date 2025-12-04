import React, { useEffect, useState, useRef } from "react";
import Api from "../Api/Api";
import { VolumeOff, VolumeUp } from "@mui/icons-material";
import "./MovieCard.css";

export default function MovieCard({ movie, position }) {
  const [videoKey, setVideoKey] = useState(null);

  // load saved mute setting for row previews
  const savedMute = localStorage.getItem("rowMute");
  const [isMuted, setIsMuted] = useState(savedMute === "false" ? false : true);

  const iframeRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  // Load trailer
  useEffect(() => {
    const loadTrailer = async () => {
      try {
        const res = await Api.get(`/movie/${movie.id}/videos`);
        const trailer = res.data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        setVideoKey(trailer ? trailer.key : null);
      } catch (err) {
        console.log("Error loading trailer:", err);
      }
    };

    loadTrailer();
  }, [movie.id]);

  // Handle mute/unmute click
  const toggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    localStorage.setItem("rowMute", newMute);
  };

  return (
    <div
      className={`moviecard ${visible ? "show" : ""}`}
      style={{ left: position.x, top: position.y }}
    >
      {/* Backdrop image */}
      <img
        className="moviecard-backdrop"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="backdrop"
      />

      {/* Trailer */}
      {videoKey && (
        <iframe
          ref={iframeRef}
          className="moviecard-video"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=${
            isMuted ? 1 : 0
          }&controls=0&showinfo=0&playsinline=1`}
          allow="autoplay; encrypted-media"
        ></iframe>
      )}

      {/* Sound control button */}
      <button className="moviecard-mute-btn" onClick={toggleMute}>
        {isMuted ? (
          <VolumeOff style={{ color: "white" }} />
        ) : (
          <VolumeUp style={{ color: "white" }} />
        )}
      </button>

      {/* Info section */}
      <div className="moviecard-info">
        <h3>{movie.title || movie.name}</h3>

        <div className="moviecard-buttons">
          <button className="mc-btn play">Play</button>
          <button className="mc-btn more">More Info</button>
        </div>
      </div>
    </div>
  );
}
