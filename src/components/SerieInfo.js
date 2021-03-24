const SerieInfo = ({ image, name, rating, genre, status, summary, id }) => {
  return (
    <div>
      <img src={image} alt="poster"></img>
      <div className="score">
        <span className="material-icons">star</span>
        {rating}
      </div>
      <h2>{name}</h2>
      <h5>{genre}</h5>
    </div>
  );
};

export default SerieInfo;
