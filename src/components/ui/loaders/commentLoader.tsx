const CommentLoader = () => {
  return (
    <div className="flex animate-pulse mt-6">
      <div className="flex-shrink-0">
        <span className="block h-16 w-16 rounded-full bg-slate-200"></span>
      </div>
      <div className="ml-4 mt-2 w-full">
        <h3 className="h-4 rounded-md bg-slate-200"></h3>
        <ul className="mt-5 space-y-3">
          <li className="h-4 w-full rounded-md bg-slate-200"></li>
          <li className="h-4 w-full rounded-md bg-slate-200"></li>
          <li className="h-4 w-full rounded-md bg-slate-200"></li>
          <li className="h-4 w-full rounded-md bg-slate-200"></li>
        </ul>
      </div>
    </div>
  );
};

export default CommentLoader;
