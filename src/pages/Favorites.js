import SerieCard from "../components/SerieItem";
import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const currentFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavs(currentFavorites);
  }, []);

  function isEmpty(obj) {
    return obj && Object.keys(obj).length ? false : true;
  }

  const removeFavorites = (id) => {
    const newFavList = favs.filter((favorite) => favorite.show.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavList));
    setFavs(newFavList);
  };

  return isEmpty(favs) ? (
    <h2 style={{ marginTop: "30px" }}>Não existem favoritos</h2>
  ) : (
    <>
      <div className="container">
        {favs &&
          favs.length > 0 &&
          favs.map((serie) => (
            <SerieCard
              key={serie.show.id}
              id={serie.show.id}
              image={
                serie.show.image
                  ? serie.show.image.medium
                  : "https://dulceseduccion.com.br/images/image-not-available.png"
              }
              name={serie.show.name}
              rating={
                serie.show.rating.average
                  ? serie.show.rating.average
                  : "No rating"
              }
              genre={
                serie.show.genres.length > 0
                  ? serie.show.genres.join(" | ")
                  : "Undefined"
              }
              handleFavorites={() => removeFavorites(serie.show.id)}
              favorites={favs}
            />
          ))}
      </div>
    </>
  );
};

export default Favorites;
