import Container from "../../components/common/Container";
import "./Home.css";

import { Link } from "react-router-dom";
import data from "../../data/jobs/job.json";

import Banner from "../../components/Banner/Banner";
import LatestJob from "../../components/LatestJob/LatestJob";

const Home = () => {
  let productItem = data.jobs
    .slice(0, 6)
    .map((job) => <LatestJob key={job.id} jobs={job} />);

  return (
    <div className="home-section">
      <Container>
        <Banner />
        <div className="home__jobs">{productItem}</div>
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
