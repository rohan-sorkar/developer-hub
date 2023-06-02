import loadingImg from "../../../assets/images/loading.gif";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <img src={loadingImg} alt="loading" />
    </div>
  );
};

export default Loading;
