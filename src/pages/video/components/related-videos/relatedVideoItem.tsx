import { Link } from "react-router-dom";
import { VideoType } from "../../../../types";

interface PropTypes {
  video: VideoType, 
  isDragging: boolean
}

const RelatedVideoItem = ({ video, isDragging }: PropTypes) => {
  return (
    <Link
      to={`/videos/${video?.id}`}
      className={`mb-4 flex w-full cursor-pointer flex-row gap-2 rounded-lg border p-2 duration-300 hover:scale-105 hover:shadow bg-white ${isDragging && 'related-video-shadow border-4 border-purple-400'}`}
    >
      <div className="relative h-auto w-[168px] flex-none">
        <img
          src={video?.thumbnail}
          className="h-full cursor-pointer rounded-md"
          alt="Some video title"
        />
        <p className="py absolute bottom-2 right-2 bg-gray-900 px-1 text-xs text-gray-100">
          {video?.duration}
        </p>
      </div>

      <div className="flex w-full flex-col">
        <p className="text-sm font-semibold text-slate-900">{video?.title}</p>
        <span className="mt-2 text-xs text-gray-400 hover:text-gray-600">
          {video?.author}
        </span>
        <p className="mt-1 text-xs text-gray-400">
          {video?.views} views . {video?.date?.toString()}
        </p>
      </div>
    </Link>
  );
};

export default RelatedVideoItem;
