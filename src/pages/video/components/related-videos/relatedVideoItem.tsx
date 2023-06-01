import { Link } from "react-router-dom";

const RelatedVideoItem = () => {
  return (
    <div className="mb-4 flex w-full flex-row gap-2 cursor-pointer border rounded-lg p-2 hover:scale-105 duration-300 hover:shadow">
      <div className="relative h-auto w-[168px] flex-none">
        <Link to={`/video/1`}>
          <img
            src="https://i.ytimg.com/vi/3rKyewl7wzo/maxresdefault.jpg"
            className="cursor-pointer rounded-md h-full"
            alt="Some video title"
          />
        </Link>
        <p className="py absolute bottom-2 right-2 bg-gray-900 px-1 text-xs text-gray-100">
          8:15
        </p>
      </div>

      <div className="flex w-full flex-col">
        <p className="text-sm font-semibold text-slate-900">
          Why you SHOULD be using TypeScript with React
        </p>
        <span className="mt-2 text-xs text-gray-400 hover:text-gray-600">
          Debra king🔥
        </span>
        <p className="mt-1 text-xs text-gray-400">
          16.1k views . February 2, 2022
        </p>
      </div>
    </div>
  );
};

export default RelatedVideoItem;
