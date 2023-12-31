import Container from "./common/Container";
import "./Home.css";
import data from "../data/jobs/job.json";
import HomeData from "./HomeData";

const Home = () => {
  let productItem = data.jobs
    .slice(0, 5)
    .map((job) => <HomeData key={job.id} jobs={job} />);
  return (
    <div className="home-section">
      <Container>
        <div className="home__jobs">{productItem}</div>
        <div className="home__section">
          <button className="home__section--button">Explore All Jobs</button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
