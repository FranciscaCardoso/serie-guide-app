import { Link } from "react-router-dom";

const SerieItem = ({ isLoading, image, name, rating, genre, id }) => {
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="serie-list">
      <span className="material-icons fav-btn">favorite</span>
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
