import loadingImg from "../../assets//loading.svg";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>Data is Loading...</h3>
      <img style={{ width: "500px" }} src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
