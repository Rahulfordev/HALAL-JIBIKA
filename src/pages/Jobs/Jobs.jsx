/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import AllJob from "../../components/AllJob/AllJob";
import "./Jobs.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Jobs = () => {
  const { isError, isLoading, data, setData } = useFetch(
    "http://localhost:9000/jobs"
  );
  const [favJobs, setFavJobs] = useState(data);
  const [jobs, setJobs] = useState([]);
  console.log(jobs);
  const fetchPost = async () => {
    await getDocs(collection(db, "jobs")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setJobs(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    setFavJobs(data);
  }, [data]);

  return (
    <div>
      <div className="home__jobs">
        {jobs?.map((jobs) => (
          <AllJob
            key={jobs.id}
            jobs={jobs}
            favJobs={favJobs}
            setFavJobs={setFavJobs}
            data={data}
            setData={setData}
          />
        ))}
        {/* {favJobs?.map((jobs) => (
          <AllJob
            key={jobs.id}
            jobs={jobs}
            favJobs={favJobs}
            setFavJobs={setFavJobs}
            data={data}
            setData={setData}
          />
        ))} */}
      </div>
      <div className="add__new" data-aos="fade-up" data-aos-duration="2000">
        <NavLink className="add__new--job button" to={"/post-a-job"}>
          Add New Job
        </NavLink>
      </div>
    </div>
  );
};

export default Jobs;
