import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../../components/common/Container";
import "./AddJob.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

const AddJob = () => {
  const navigate = useNavigate();
  const baseURL = "http://localhost:9000/jobs";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title: e.target.title.value,
      logo: e.target.logo.value,
      companyName: e.target.companyName.value,
      description: e.target.description.value,
      location: e.target.location.value,
      position: e.target.position.value,
      salary: e.target.salary.value,
      postDate: e.target.postDate.value,
      expireDate: e.target.expireDate.value,
    };
    console.log(jobData);
    /* firebase add */
    try {
      const docRef = await addDoc(collection(db, "jobs"), {
        ...jobData,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    /* firebase add */

    // await axios.post(baseURL, jobData).then((response) => {
    //   setJobData(response.data);
    // });
    // toast.success("New Job Added", {
    //   toastId: "Rahul Ali",
    // });
    // navigate("/jobs");
  };

  return (
    <div>
      <Container>
        <div className="post-form--container">
          <h3 className="add__post--title">
            Post Your Job with <span>HALAL JIBIKA</span>
          </h3>
          <form className="post-form" onSubmit={handleSubmit}>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="title">Job Title:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required=""
                  placeholder="UI/UX Designer"
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="email">Logo:</label>
                <input
                  type="url"
                  id="logo"
                  name="logo"
                  required=""
                  placeholder="Company logo URL"
                />
              </div>
            </div>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Apple Inc."
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required=""
                  placeholder="New York, NY 10001, USA"
                />
              </div>
            </div>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="salary">Salary:</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  placeholder="$10K"
                />
              </div>
              <div className="post__form--group">
                <label htmlFor="position">Position:</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Web Designer"
                  required=""
                />
              </div>
            </div>
            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="postDate">Job Post Date:</label>
                <input type="number" id="postDate" name="postDate" />
              </div>
              <div className="post__form--group">
                <label htmlFor="expireDate">Job Expire Date:</label>
                <input type="number" id="expireDate" name="expireDate" />
              </div>
            </div>

            <div className="add__post--input">
              <div className="post__form--group">
                <label htmlFor="description">Job Description:</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  required=""
                />
              </div>
            </div>

            <button className="post__button" type="submit">
              POST
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddJob;
