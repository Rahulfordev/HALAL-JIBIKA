/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import FavoriteJob from "../../components/FavoriteJob/FavoriteJob";
import Container from "../../components/common/Container";

const Favorite = () => {
  const { isError, isLoading, data, setStateDataUpdateing } = useFetch(
    "https://jobs-rvc2.onrender.com/jobs"
  );
  const [fave, setFave] = useState(data);

  const isTrueData = fave.filter((trueData) => trueData.isTrue === true);

  const favoriteJob = isTrueData.map((favorite) => (
    <FavoriteJob
      key={favorite.id}
      favorite={favorite}
      fave={fave}
      setFave={setFave}
      setStateDataUpdateing={setStateDataUpdateing}
    />
  ));

  useEffect(() => {
    setFave(data);
  }, [data]);

  return (
    <Container>
      <div className="home__jobs">{favoriteJob}</div>
    </Container>
  );
};

export default Favorite;
