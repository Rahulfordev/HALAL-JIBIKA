import HeroImage from "../../assets/aboutUs.jpg";
import { Link } from "react-router-dom";
import Container from "../../components/common/Container";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container>
        <div className="about__banner">
          <div
            className="about__banner--headline"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div className="about__banner--content">
              <h1 className="hero__banner--title">
                Trusted & Popular Job Portal
              </h1>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur.
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
            <div className="about__banner--explore">
              <Link className="button about__truested--button">100% Trust</Link>
            </div>
          </div>
          <div
            className="about__banner--image"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={HeroImage} alt="hero--image" />
          </div>
        </div>
      </Container>

      <div className="">
        <Container></Container>
      </div>
    </div>
  );
};

export default About;
