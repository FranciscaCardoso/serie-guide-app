import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/Search";
import SerieCard from "../components/SerieItem";
import Favorites from "./Favorites";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <SearchBar getQuery={(q) => setQuery(q)} />
      <div className="container">
        {series.map((serie) => (
          <SerieCard
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
            component={Favorites}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
