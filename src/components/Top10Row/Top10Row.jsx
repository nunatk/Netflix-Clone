import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import MovieCard from "../MovieCard/MovieCard";
import "./Top10Row.css";

export default function Top10Row({ title, fetchUrl }) {
  const [items, setItems] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadTop10 = async () => {
      try {
        const res = await Api.get(fetchUrl);
        const topTen = res.data.results.slice(0, 10); // Top 10 only
        setItems(topTen);
      } catch (err) {
        console.log("Top10 error:", err);
      }
    };

    loadTop10();
  }, [fetchUrl]);

  const handleMouseEnter = (item, index, e) => {
    setHoverIndex(index);

    const rect = e.target.getBoundingClientRect();
    let newY = rect.top - 230;
    if (newY < 90) newY = 90;

    setHoverPos({ x: rect.left, y: newY });
    setHoverItem(item);
  };

  const handleMouseLeaveRow = () => {
    setHoverIndex(null);
    setHoverItem(null);
  };

  return (
    <div className="top10-row" onMouseLeave={handleMouseLeaveRow}>
      <h2 className="top10-title">{title}</h2>

      <div className="top10-posters">
        {items.map((item, index) => {
          let className = "top10-poster";

          if (hoverIndex === index) className += " hovered";
          else if (hoverIndex !== null && index < hoverIndex) className += " shift-left";
          else if (hoverIndex !== null && index > hoverIndex) className += " shift-right";

          return (
            <div className="top10-item" key={item.id}>
              <div className="rank-number">{index + 1}</div>

              <img
                className={className}
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.name || item.title}
                onMouseEnter={(e) => handleMouseEnter(item, index, e)}
              />
            </div>
          );
        })}
      </div>

      {hoverItem && <MovieCard movie={hoverItem} position={hoverPos} />}
    </div>
  );
}
