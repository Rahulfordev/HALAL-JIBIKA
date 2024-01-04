import { useLoaderData } from "react-router-dom";
import Container from "../../components/common/Container";
import JobDetailsShow from "../../components/JobDetailsShow/JobDetailsShow";

const JobDetails = () => {
  const jobDetails = useLoaderData();

  return (
    <div>
      <Container>
        <JobDetailsShow jobDetails={jobDetails} />
      </Container>
    </div>
  );
};

export default JobDetails;
