import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/Search";
import SerieCard from "../components/SerieItem";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentFavorites = localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [];
    // const currentFavorites = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(currentFavorites);
    // console.log(currentFavorites);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `http://api.tvmaze.com/search/shows?q=${query}`
      );

      setSeries(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  const addFavorites = (serie) => {
    const isFav = favorites.filter((fav) => fav.show.id == serie.show.id);
    // console.log(isFav);
    // const isFav = favorites.filter((fav) => { return fav.show.id == serie.show.id; })
    if (isFav.length == 0) {
      const newFavList = [...favorites, serie];
      localStorage.setItem("favorites", JSON.stringify(newFavList));
      setFavorites(newFavList);
    }
    // console.log(newFavList);
  };

  return (
    <>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <div className="container">
        {series.map((serie) => (
          <SerieCard
            ser={serie}
            favorites={favorites}
            isLoading={isLoading}
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
            handleFavorites={addFavorites}
            setFavorites={(f) => setFavorites(f)}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
