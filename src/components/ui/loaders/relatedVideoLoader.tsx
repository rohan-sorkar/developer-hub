export default function RelatedVideoLoader() {
  return (
    <div className="mb-4 flex w-full animate-pulse flex-row gap-2">
      <div className="relative h-[94px] w-[168px] flex-none duration-300 hover:scale-[1.03]">
        <div className="aspect-video bg-slate-200 rounded-lg"></div>
      </div>

      <div className="flex w-full grow flex-col space-y-2">
        <p className="bg-slate-200 text-[8px] text-slate-200">Loading...</p>
        <span className="mt-2 bg-slate-200 text-[8px] text-slate-200">
          Loading...
        </span>
        <p className="bg-slate-200 text-[8px] text-slate-200">Loading...</p>
      </div>
    </div>
  );
}
