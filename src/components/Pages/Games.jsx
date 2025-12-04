import React, { useState } from "react";
import "./Games.css";

const gamesData = [
  {
    id: 1,
    title: "Asphalt 9",
    img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000014952/70c58382cbf141504b8933e53befbb5a615d324c64fcb24f514c9ef28772a957",
    genre: "Racing",
  },
  {
    id: 2,
    title: "Shadow Fight Arena",
    img: "https://m.media-amazon.com/images/I/41YLWuhpq3L._UX500_FMwebp_QL85_.jpg",
    genre: "Action",
  },
  {
    id: 3,
    title: "Minecraft",
    img: "https://m.media-amazon.com/images/I/81gsSy5r13L.png",
    genre: "Adventure",
  },
  {
    id: 4,
    title: "Brawlhalla",
    img: "https://m.media-amazon.com/images/I/512lQs347uL._SX342_SY445_QL70_FMwebp_.jpg",
    genre: "Fighting",
  },
  {
    id: 5,
    title: "Call of Duty Mobile",
    img: "https://m.media-amazon.com/images/I/818Cr-0H89L._SY522_.jpg",
    genre: "Shooter",
  },
  {
    id: 6,
    title: "Chess Online",
    img: "https://m.media-amazon.com/images/I/81xsWsaRjgL.png",
    genre: "Strategy",
  }
];

export default function Games() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredGames =
    selectedGenre === "All"
      ? gamesData
      : gamesData.filter((g) => g.genre === selectedGenre);

  return (
    <div className="games-page">
      <h1 className="games-title">Mobile Games on Netflix</h1>

      <div className="games-filters">
        <label>Filter by Genre:</label>

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="games-select"
        >
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Racing">Racing</option>
          <option value="Adventure">Adventure</option>
          <option value="Shooter">Shooter</option>
          <option value="Strategy">Strategy</option>
          <option value="Fighting">Fighting</option>
        </select>
      </div>

      <div className="games-grid">
        {filteredGames.map((game) => (
          <div className="game-card" key={game.id}>
            <img src={game.img} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
