/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import LatestJob from "../../components/LatestJob/LatestJob";
import "./Jobs.css";

const Jobs = ({ clice }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch("../../../src/data/jobs/job.json");
      const data = await reponse.json();
      setJobs(data);
    };
    fetchData();
  }, []);
  console.log(jobs.jobs);
  return (
    <div className="home__jobs">
      {jobs?.jobs?.slice(0, clice).map((job) => (
        <LatestJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
