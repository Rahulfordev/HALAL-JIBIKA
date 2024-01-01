import { useLoaderData, useParams } from "react-router-dom";
import JobDetailsShow from "../../components/JobDetailsShow/JobDetailsShow";
import Container from "../../components/common/Container";

const JobDetails = () => {
  const jobData = useLoaderData();

  const { id } = useParams();
  const parInt = parseInt(id);
  const findId = jobData.find((jobId) => jobId.id === parInt);

  return (
    <div>
      <Container>
        <JobDetailsShow findId={findId} />
      </Container>
    </div>
  );
};

export default JobDetails;
