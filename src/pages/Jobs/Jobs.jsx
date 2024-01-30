/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import AllJob from "../../components/AllJob/AllJob";
import "./Jobs.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const Jobs = () => {
  const { isError, isLoading, data, setData } = useFetch(
    "https://jobs-rvc2.onrender.com/jobs"
  );
  const [favJobs, setFavJobs] = useState(data);

  useEffect(() => {
    setFavJobs(data);
  }, [data]);

  return (
    <div>
      <div className="home__jobs">
        {data?.length === 0 ? (
          <Loading />
        ) : (
          favJobs?.map((jobs) => (
            <AllJob
              key={jobs.id}
              jobs={jobs}
              favJobs={favJobs}
              setFavJobs={setFavJobs}
              data={data}
              setData={setData}
            />
          ))
        )}
      </div>
      <div className="add__new">
        <NavLink className="add__new--job button" to={"/post-a-job"}>
          Add New Job
        </NavLink>
      </div>
    </div>
  );
};

export default Jobs;
