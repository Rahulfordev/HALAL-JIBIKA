/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import LatestJob from "../../components/LatestJob/LatestJob";
import "./Jobs.css";

const Jobs = ({ clice }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/job.json");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error feaching data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="home__jobs">
      {jobs.slice(0, clice).map((job) => (
        <LatestJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
