import loadingImg from "../../assets//loading.svg";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ width: "200px" }} src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
