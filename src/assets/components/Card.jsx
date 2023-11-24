import "../styles/Card.scss";
import imgBlank from "../images/blank-person-photo.jpg";
import imgStar from "../images/star.png";

export default function Card({
  status,
  image = imgBlank,
  rating = "0.0",
  ratingAmount = 0,
  location = "No Location",
  desc = "Placeholder",
  price = 0,
}) {
  let cardStatus = null;

  if (status) {
    cardStatus = (
      <div className="card-status-div">
        <span className="card-status">{status}</span>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-container">
        <div className="card-img-container">
          {cardStatus}
          <div className="card-img-div">
            <img src={image} alt="" className="card-image" />
          </div>
        </div>
        <div className="card-desc-container">
          <div className="card-desc-rating-container">
            <img src={imgStar} alt="" className="card-desc-star-img" />
            <span className="card-desc-rating-text">{rating}</span>
            <span className="card-desc-rating-details-text">
              ({ratingAmount}) • {location}
            </span>
          </div>
          <span className="card-desc-text">{desc}</span>
          <div className="card-desc-price">
            <span className="card-desc-price-bold">From ${price} /</span> person
          </div>
        </div>
      </div>
    </div>
  );
}
