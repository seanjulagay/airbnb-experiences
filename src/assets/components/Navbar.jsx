import logoAirbnb from "../images/airbnb-logo.png";
import "../styles/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src={logoAirbnb} alt="" className="airbnb-logo" />
      </div>
    </div>
  );
}
