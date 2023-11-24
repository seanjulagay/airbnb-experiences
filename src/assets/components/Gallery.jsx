import Card from "./Card";
import "../styles/Gallery.scss";
import imgLifeLessons from "../images/katie-zaferes.png";
import imgWeddingPhotog from "../images/wedding-photography.png";
import imgMountainBiking from "../images/mountain-biking.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <Card
        status="sold out"
        image={imgLifeLessons}
        rating="5.0"
        ratingAmount={6}
        location="USA"
        desc="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        status="online"
        image={imgWeddingPhotog}
        rating="5.0"
        ratingAmount={30}
        location="USA"
        desc="Learn wedding photography"
        price={125}
      />
      <Card
        image={imgMountainBiking}
        rating="4.8"
        ratingAmount={2}
        location="USA"
        desc="Group Mountain Biking"
        price={50}
      />
    </div>
  );
}
