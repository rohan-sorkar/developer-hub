import { VideoType } from "../../../../types";

const VideoDescription = ({video}: {video: VideoType}) => {
  return (
    <>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {video?.title}
      </h1>
      <div className="space-between flex items-center gap-4 border-b pb-4">
        <h2 className="w-full text-sm leading-[1.7142857] text-slate-600">
          Uploaded on {video?.date?.toString()}
        </h2>
      </div>

      <p className="mt-4 font-serif text-lg text-[#334155] dark:text-slate-400">
        {video?.description}..
      </p>
    </>
  );
};

export default VideoDescription;
