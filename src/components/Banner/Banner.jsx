import "./Banner.css";
import HeroImage from "../../assets/hero-image.png";
import { Link } from "react-router-dom";

const Banner = ({ desc }) => {
  return (
    <div className="home__banner">
      <div className="home__banner--headline">
        <div className="home__banner--content">
          <h1 className="hero__banner--title">
            Find The Job That Fits <br /> <span>Your Life</span>
          </h1>
          <p>{desc}</p>
        </div>
        <div className="home__banner--explore">
          <Link className="button home__banner-button">Explore Now</Link>
        </div>
      </div>
      <div className="home__banner--image">
        <img src={HeroImage} alt="hero--image" />
      </div>
    </div>
  );
};

export default Banner;
