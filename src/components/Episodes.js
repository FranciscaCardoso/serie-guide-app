import dateFormat from "dateformat";
import React from "react";

const Episodes = ({ image, num, name, date }) => {
  const d = dateFormat(date, "d mmmm yyyy");
  return (
    <>
      <div className="smth">
        {/* <img src={image} alt={name}></img> */}
        <div className="eps">
          <h3>{name} </h3>
          <p>
            Ep{num} - {d}
          </p>
        </div>
        <div className="checked">
          <span className="material-icons">check_circle_outline</span>
        </div>
      </div>
    </>
  );
};

export default Episodes;
