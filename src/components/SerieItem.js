import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const SerieItem = ({
  ser,
  favorites,
  isLoading,
  image,
  name,
  rating,
  genre,
  id,
  handleFavorites,
  setFavorites,
}) => {
  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   const currentFavorites = JSON.parse(localStorage.getItem("favorites"));
  //   if (currentFavorites) setFavorites(currentFavorites);
  // }, []);

  const getIsFavorite = (id) => {
    const r =
      favorites &&
      favorites.filter((s) => {
        if (s.show.id == id) return true;
      });
    return r && r.length > 0 ? true : false;
  };

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="serie-list">
      <span
        className="material-icons fav-btn"
        onClick={() => handleFavorites(ser)}
        style={{ color: getIsFavorite(id) ? "red" : "white" }}
      >
        favorite
      </span>
      <img src={image} alt={name} className="poster"></img>
      <div className="details">
        <div className="score">
          <span className="material-icons">star</span>
          {rating}
        </div>
        <h2>{name}</h2>
        <h5>{genre}</h5>
      </div>
      <Link to={`/Detalhes/${id}`} className="btn-detail">
        <span className="material-icons info-btn">info</span>
        Detalhes
      </Link>
    </div>
  );
};

export default SerieItem;
