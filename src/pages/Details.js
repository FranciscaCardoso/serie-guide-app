import React, { useState, useEffect } from "react";
import SerieInfo from "../components/SerieInfo";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [seriesInfo, setSeriesInfo] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://api.tvmaze.com/shows/${id}`);
      //const eps = await axios(`http://api.tvmaze.com/shows/${id}/episodes`);
      // console.log(result.data);
      //console.log(eps.data);
      setSeriesInfo(result.data);
    };
    fetchItems();
  });

  return (
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
        {/* {seriesInfo.map((serie) => (
            <SerieInfo
              key={serie.id}
              id={serie.id}
              // image={
              //   serie.image
              //     ? serie.image.medium
              //     : "https://dulceseduccion.com.br/images/image-not-available.png"
              // }
              name={serie.name}
              // rating={serie.rating.average ? serie.rating.average : "No rating"}
              // genre={
              //   serie.genres.length > 0 ? serie.genres.join(" | ") : "Undefined"
              // }
              // status={serie.status}
              // summary={
              //   serie.summary
              //     ? serie.summary.replace(/(<([^>]+)>)/gi, "")
              //     : "No summary available"
              // }
            />
          ))} */}
      </div>
      <div className="container-details2">
        <h1>Temporadas</h1>
      </div>
    </div>
  );
};

export default Details;
