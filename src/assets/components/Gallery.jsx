import Card from "./Card";
import "../styles/Gallery.scss";
import imgLifeLessons from "../images/katie-zaferes.png";
import imgWeddingPhotog from "../images/wedding-photography.png";
import imgMountainBiking from "../images/mountain-biking.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <Card status="sold out" image={imgLifeLessons} />
      <Card status="online" image={imgWeddingPhotog} />
      <Card status="" image={imgMountainBiking} />
      <Card />
    </div>
  );
}
