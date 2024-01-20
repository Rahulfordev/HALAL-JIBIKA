import Container from "../../components/common/Container";
import ApplyedJob from "../../components/ApplyedJob/ApplyedJob";
import useFetch from "../../Hooks/useFetch";
import { useEffect, useState } from "react";

const ApplyedJobs = () => {
  // eslint-disable-next-line no-unused-vars
  const { isError, isLoading, data } = useFetch(
    "https://jobs-rvc2.onrender.com/jobs"
  );
  const [applyFave, setApplyFave] = useState(data);
  const isApplyedData = applyFave.filter(
    (trueData) => trueData.isApplyed === true
  );

  const ApplyedJobs = isApplyedData.map((applyed) => (
    <ApplyedJob
      applyFave={applyFave}
      setApplyFave={setApplyFave}
      key={applyed.id}
      applyed={applyed}
    />
  ));

  useEffect(() => {
    setApplyFave(data);
  }, [data]);

  return (
    <Container>
      <div className="home__jobs">{ApplyedJobs}</div>
    </Container>
  );
};

export default ApplyedJobs;
