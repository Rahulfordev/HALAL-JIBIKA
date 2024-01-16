/* eslint-disable no-unused-vars */
import Container from "../../components/common/Container";
import "./Home.css";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/common/Title";
import useFetch from "../../Hooks/useFetch";
import LatestJob from "../../components/LatestJob/LatestJob";
import Loading from "../../components/Loading/Loading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Home = () => {
  const { jobs } = useContext(AuthContext);
  const { isError, isLoading, data, setData } = useFetch(
    "http://localhost:9000/jobs"
  );
  const [favJob, setFavJob] = useState(data);
  useEffect(() => {
    setFavJob(data);
  }, [data]);

  const mapData = jobs
    .slice(0, 6)
    .map((job) => (
      <LatestJob key={job.id} job={job} favJob={favJob} setFavJob={setFavJob} />
    ));

  return (
    <div className="home-section">
      <Container>
        <Banner />
        <div>
          <Title />
          <div className="home__jobs">{isLoading ? <Loading /> : mapData}</div>
        </div>
        <div
          className="home__explore--all"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Link to="/jobs" className="explore-button button">
            Explore All Jobs
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
