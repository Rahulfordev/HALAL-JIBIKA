/* eslint-disable no-unused-vars */
import useFetch from "../../Hooks/useFetch";
import FavoriteJob from "../../components/FavoriteJob/FavoriteJob";
import Container from "../../components/common/Container";

const Favorite = () => {
  const { isError, isLoading, data } = useFetch("http://localhost:9000/jobs");

  const isTrueData = data.filter((trueData) => trueData.isTrue === true);

  const favoriteJob = isTrueData.map((favorite) => (
    <FavoriteJob key={favorite.id} favorite={favorite} />
  ));
  return (
    <Container>
      <div className="home__jobs">{favoriteJob}</div>
    </Container>
  );
};

export default Favorite;
