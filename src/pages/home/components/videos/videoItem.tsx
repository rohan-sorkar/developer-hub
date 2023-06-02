import { Link } from "react-router-dom";

const VideoItem = () => {
  return (
    <div className="col-span-12 rounded-xl border shadow-md duration-300 hover:scale-[1.03] sm:col-span-6 md:col-span-3">
      <div className="flex w-full flex-col">
        <div className="relative">
          <Link to={`/videos/1`}>
            <img
              src="https://i.ytimg.com/vi/3rKyewl7wzo/maxresdefault.jpg"
              className="h-auto w-full rounded-xl"
              alt="thumbnail"
            />
          </Link>
          <p className="py absolute bottom-2 right-2 bg-gray-900 px-1 text-xs text-gray-100">
            8:15
          </p>
        </div>

        <div className="flex flex-row gap-2 px-5 pb-7 pt-4">
          <Link to={`/videos/1`}>
            <img
              src="https://yt3.ggpht.com/tLOaVyDRQq46qga99PFlP9b3PRcni8gBJepNOecsgIdADpxU10p6w0VD-fZ8VvtqeldN6IHYOj0=s88-c-k-c0x00ffffff-no-rj"
              className="mt-2 h-6 w-6 shrink-0 rounded-full"
              alt="logo"
            />
          </Link>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-slate-900">
              Why you SHOULD be using TypeScript with React
            </p>
            <span className="cursor-pointer text-sm text-gray-400 hover:text-gray-600 hover:underline">
              Pedro tech
            </span>
            <p className="text-sm text-gray-400">
              16.1k views . February 2, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
