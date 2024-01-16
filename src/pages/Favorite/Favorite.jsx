/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import FavoriteJob from "../../components/FavoriteJob/FavoriteJob";
import Container from "../../components/common/Container";
import { AuthContext } from "../../providers/AuthProviders";

const Favorite = () => {
  const { setFaveUpdate, faveUpdate } = useContext(AuthContext);
  const { isError, isLoading, data, setStateDataUpdateing } = useFetch(
    "http://localhost:9000/jobs"
  );
  const [fave, setFave] = useState(data);

  const isTrueData = fave.filter((trueData) => trueData.isTrue === true);

  const favoriteJob = isTrueData?.map((favorite) => (
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
