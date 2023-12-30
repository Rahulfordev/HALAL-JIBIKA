import Container from "./common/Container";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section">
      <Container>
        <div className="home__section">
          <button className="home__section--button">Explore</button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
