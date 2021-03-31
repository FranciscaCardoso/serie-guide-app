import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SerieInfo from "../components/SerieInfo";
import Seasons from "../components/Seasons";

const Details = () => {
  const { id } = useParams();
  const [seriesInfo, setSeriesInfo] = useState([]);
  const [season, setSeason] = useState([]);
  const [eps, setEps] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://api.tvmaze.com/shows/${id}`);
      const eps = await axios(`http://api.tvmaze.com/shows/${id}/episodes`);
      const seasons = await axios(`http://api.tvmaze.com/shows/${id}/seasons`);
      // console.log(result.data);
      //console.log(eps.data);
      //console.log(seasons.data);
      setEps(eps.data);
      setSeriesInfo(result.data);
      setSeason(seasons.data);
    };
    fetchItems();
  }, []);

  return (
    <>
      <div className="info">
        <h2>Detalhes da Série</h2>
        <div className="container-details">
          <img
            src={
              seriesInfo.image
                ? seriesInfo.image.original
                : "https://dulceseduccion.com.br/images/image-not-available.png"
            }
            alt={seriesInfo.name}
          ></img>
          <div className="serie-info">
            <h1>{seriesInfo.name}</h1>
            <div className="rating">
              <span className="material-icons">star</span>
              {seriesInfo.rating ? seriesInfo.rating.average : "No rating"}
            </div>
            <p className="genres">
              {seriesInfo.genres ? seriesInfo.genres.join(" | ") : "Undefined"}
            </p>
            <p className="Status">Status: {seriesInfo.status}</p>
            <br />
            <p>
              {seriesInfo.summary
                ? seriesInfo.summary.replace(/(<([^>]+)>)/gi, "")
                : "No summary available"}
            </p>
          </div>
        </div>
      </div>
      <div className="container-details2">
        <h1>Temporadas</h1>
        <div className="temp">
          <Seasons temp={season} episodes={eps}></Seasons>
        </div>
      </div>
    </>
  );
};

export default Details;
