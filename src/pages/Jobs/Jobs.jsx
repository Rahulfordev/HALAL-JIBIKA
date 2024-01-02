/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import AllJob from "../../components/AllJob/AllJob";
import AddJob from "../CRUD/AddJob/AddJob";
import "./Jobs.css";

const Jobs = () => {
  const { isError, isLoading, data } = useFetch("http://localhost:9000/jobs");

  return (
    <div>
      <div className="home__jobs">
        {data?.map((job) => (
          <AllJob key={job.id} job={job} />
        ))}
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
