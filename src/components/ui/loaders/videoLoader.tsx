export default function VideoLoader() {
  return (
    <div className="col-span-12 flex w-full animate-pulse flex-col sm:col-span-6 md:col-span-3">
      <div className="relative">
        <div className="aspect-video bg-slate-200" />
      </div>

      <div className="mt-2 flex flex-row items-center gap-2">
        <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200" />

        <div className="flex grow flex-col space-y-1">
          <p className="bg-slate-200 text-[8px] text-slate-200">Loading...</p>
          <p className="bg-slate-200 text-[8px] text-slate-200">Loading...</p>
          <p className="bg-slate-200 text-[8px] text-slate-200">Loading...</p>
        </div>
      </div>
    </div>
  );
}
