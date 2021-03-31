import React, { useState, useEffect } from "react";
import Episodes from "./Episodes";

const Seasons = ({ temp, episodes }) => {
  const [epT, setEpT] = useState([]);

  const showEpisodes = (id) => {
    const epsTemp = episodes.filter((eps) => eps.season == id);
    setEpT(epsTemp);
    //console.log(epsTemp);
  };

  return (
    <>
      <div className="temporadas">
        {temp.map((tempor) => (
          <button
            className="btn-eps"
            onClick={() => showEpisodes(tempor.number)}
          >
            T{tempor.number}
          </button>
        ))}
      </div>
      <div className="episodes">
        {epT.map((eps) => (
          <Episodes
            key={eps.id}
            image={eps.image.medium}
            num={eps.number}
            name={eps.name}
            date={eps.airdate}
          />
        ))}
      </div>
    </>
  );
};

export default Seasons;
