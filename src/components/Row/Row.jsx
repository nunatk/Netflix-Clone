import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import MovieCard from "../MovieCard/MovieCard";
import "./Row.css";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [hoverMovie, setHoverMovie] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState(null); 

  // Load movies
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const res = await Api.get(fetchUrl);
        setMovies(res.data?.results || []);
      } catch (err) {
        console.log("Row error:", err);
      }
    };

    loadMovies();
  }, [fetchUrl]);

 
  const handleMouseEnter = (movie, index, e) => {
    setHoverIndex(index); 

    const rect = e.target.getBoundingClientRect();
    let newY = rect.top - 230;
    if (newY < 90) newY = 90;

    setHoverPos({ x: rect.left, y: newY });
    setHoverMovie(movie);
  };


  const handleMouseLeaveRow = () => {
    setHoverIndex(null);
    setHoverMovie(null);
  };

  return (
    <div className="row" onMouseLeave={handleMouseLeaveRow}>
      <h2 className="row-title">{title}</h2>

      <div className="row-posters">
        {movies.map((movie, index) => {
          let className = "row-poster";

          if (hoverIndex === index) {
            className += " hovered"; 
          } else if (hoverIndex !== null && index < hoverIndex) {
            className += " shift-left"; 
          } else if (hoverIndex !== null && index > hoverIndex) {
            className += " shift-right"; 
          }

          return (
            <img
              key={movie.id}
              className={className}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              onMouseEnter={(e) => handleMouseEnter(movie, index, e)}
              alt={movie.title}
            />
          );
        })}
      </div>

      {/* Movie popup card */}
      {hoverMovie && <MovieCard movie={hoverMovie} position={hoverPos} />}
    </div>
  );
}
