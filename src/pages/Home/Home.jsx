import Container from "../../components/common/Container";
import "./Home.css";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/common/Title";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <div className="home-section">
      <Container>
        <Banner
          desc="Resume-Library is a true performance-based job board. Enjoy custom
            hiring products and access to up to 10,000 new resume registrations
            daily, with no subscriptions or user licences."
        />
        <div>
          <Title />

          <Jobs clice={6} />
        </div>
        <div className="home__explore--all">
          <Link to="/jobs" className="explore-button button">
            Explore All Jobs
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
