import VideoItem from "./videoItem";

const Videos = () => {
  return (
    <div className="mx-auto grid min-h-[300px] max-w-7xl grid-cols-12 gap-4 px-5 lg:px-0">
      <VideoItem />
    </div>
  );
};

export default Videos;
