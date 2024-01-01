import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobData = useLoaderData();

  const { id } = useParams();
  console.log(id);
  return <div>JobDetails</div>;
};

export default JobDetails;
