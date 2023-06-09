import { Link } from "react-router-dom";
import { VideoType } from "../../../../types";

const VideoItem = ({video} : {video: VideoType}) => {
  const {thumbnail, duration, logo, title, author, views, date, id} = video;

  return (
    <div className="col-span-12 rounded-xl border shadow-md duration-300 hover:scale-[1.03] sm:col-span-6 md:col-span-3">
      <div className="flex w-full flex-col">
        <div className="relative">
          <Link to={`/videos/${id}`}>
            <img
              src={thumbnail}
              className="h-auto w-full rounded-xl"
              alt="thumbnail"
            />
          </Link>
          <p className="py absolute bottom-2 right-2 bg-gray-900 px-1 text-xs text-gray-100">
            {duration}
          </p>
        </div>

        <div className="flex flex-row gap-2 px-5 pb-7 pt-4">
          <Link to={`/videos/${id}`}>
            <img
              src={logo}
              className="mt-2 h-6 w-6 shrink-0 rounded-full"
              alt="logo"
            />
          </Link>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-slate-900">
              {title}
            </p>
            <span className="cursor-pointer text-sm text-gray-400 hover:text-gray-600 hover:underline">
              {author}
            </span>
            <p className="text-sm text-gray-400">
              {views} views . {date?.toString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
