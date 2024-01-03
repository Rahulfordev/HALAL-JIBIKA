/* eslint-disable no-unused-vars */
import Container from "../../components/common/Container";
import "./Home.css";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/common/Title";
import useFetch from "../../Hooks/useFetch";
import LatestJob from "../../components/LatestJob/LatestJob";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const { isError, isLoading, data, setData } = useFetch(
    "http://localhost:9000/jobs"
  );
  const mapData = data
    .slice(0, 6)
    .map((job) => (
      <LatestJob key={job.id} job={job} data={data} setData={setData} />
    ));

  return (
    <div className="home-section">
      <Container>
        <Banner />
        <div>
          <Title />
          <div className="home__jobs">{isLoading ? <Loading /> : mapData}</div>
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
