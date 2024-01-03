import Container from "../../components/common/Container";
import ApplyedJob from "../../components/ApplyedJob/ApplyedJob";
import useFetch from "../../Hooks/useFetch";

const ApplyedJobs = () => {
  // eslint-disable-next-line no-unused-vars
  const { isError, isLoading, data } = useFetch("http://localhost:9000/jobs");

  const isApplyedData = data.filter((trueData) => trueData.isApplyed === true);

  const ApplyedJobs = isApplyedData.map((applyed) => (
    <ApplyedJob key={applyed.id} applyed={applyed} />
  ));
  return (
    <Container>
      <div className="home__jobs">{ApplyedJobs}</div>
    </Container>
  );
};

export default ApplyedJobs;
