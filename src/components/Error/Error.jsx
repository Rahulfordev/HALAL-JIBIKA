/* eslint-disable react/prop-types */
const Error = ({ error }) => {
  const { message } = error;
  return (
    <div>
      <h4>{message}</h4>
    </div>
  );
};

export default Error;
