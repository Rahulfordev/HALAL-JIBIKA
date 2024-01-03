import HeroImage from "../../assets/hero-image.png";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import "./About.css";

const About = () => {
  return (
    <Container>
      <div className="home__banner">
        <div className="home__banner--headline">
          <div className="home__banner--content">
            <h1 className="hero__banner--title">
              Trusted & Popular Job Portal
            </h1>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
          </div>
          <div className="about__section--jobs">
            <div className="about__section--job">
              <h4>14K+</h4>
              <p>Job Available</p>
            </div>
            <div className="about__section--job">
              <h4>18K+</h4>
              <p>Submitted CV</p>
            </div>
            <div className="about__section--job">
              <h4>9K+</h4>
              <p>Company</p>
            </div>
          </div>
          <div className="home__banner--explore"> 
            <Link className="button about__truested--button">100% Trust</Link>
          </div>
        </div>
        <div className="home__banner--image">
          <img src={HeroImage} alt="hero--image" />
        </div>
      </div>
    </Container>
  );
};

export default About;
