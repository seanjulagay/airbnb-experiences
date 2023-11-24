import "../styles/Card.scss";
import blankPhoto from "../images/blank-person-photo.jpg";

export default function Card({ status = "Placeholder", image = blankPhoto }) {
  return (
    <div className="card">
      <div className="card-container">
        <div className="card-img-container">
          <span className="card-status">{status}</span>
          <div className="card-img-div">
            <img src={image} alt="" className="card-image" />
          </div>
        </div>
        <div className="card-desc-container"></div>
      </div>
    </div>
  );
}
