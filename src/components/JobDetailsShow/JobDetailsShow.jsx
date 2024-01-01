/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import "./JobDetailsShow.css";
const JobDetailsShow = ({ findId }) => {
  const {} = findId;
  return (
    <div className="job__details--container">
      <div className="job__details--left">
        <h2>Job Description</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          magnam sapiente dolor quos expedita quis, ad perspiciatis hic nihil
          laboriosam at eius.
        </p>
        <h2>Required Knowledge, Skills, and Abilities</h2>
        <button>Apply Now</button>
      </div>
      <div className="job__details--right">
        <div className="job__details--one">
          <h2>Overview</h2>
          <div>
            <h6>Offered Salary</h6>
            <p>$10k-$150k</p>
          </div>
          <div>
            <h6>Offered Salary</h6>
            <p>$10k-$150k</p>
          </div>
          <div>
            <h6>Offered Salary</h6>
            <p>$10k-$150k</p>
          </div>
          <div>
            <h6>Offered Salary</h6>
            <p>$10k-$150k</p>
          </div>
        </div>
        <div className="job__details--two">
          <h2>Company Address</h2>
          <p>4th Floor, 408 No Chamber</p>
          <p>Call : +07 554 332 322</p>
          <p>hello@peof.com</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsShow;
