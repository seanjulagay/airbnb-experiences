import "../styles/Hero.scss";
import imageHero from "../images/airbnb-hero-image.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <img src={imageHero} alt="" className="hero-image" />
        <div className="hero-desc">
          <h1 className="hero-header">Online Experiences</h1>
          <span className="hero-text">
            Join unique interactive activities led by one-of-a-kind hosts--all
            without leaving home.
          </span>
        </div>
      </div>
    </div>
  );
}
