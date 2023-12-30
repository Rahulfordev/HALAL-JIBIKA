/* eslint-disable react/prop-types */
const HomeData = ({ jobs }) => {
  console.log(jobs);
  const {
    title,
    companyName,
    description,
    postDate,
    expireDate,
    salary,
    location,
    position,
    logo,
  } = jobs;
  return (
    <div className="home__job">
      <h5>{title}</h5>
      <h5>{companyName}</h5>
      <h5>{description}</h5>
      <h5>{position}</h5>
      <h5>{postDate}</h5>
      <h5>{expireDate}</h5>
      <h5>{salary}</h5>
      <h5>{location}</h5>
      <img src={logo} width="50px" alt="" />
    </div>
  );
};

export default HomeData;
