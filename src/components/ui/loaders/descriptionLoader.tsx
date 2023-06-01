export default function DescriptionLoader() {
  return (
    <div className="animate-pulse">
      <h1 className="bg-slate-200 text-xs text-slate-200">Loading...</h1>
      <div className="space-between mt-2 flex items-center border-b pb-4">
        <h2 className="w-[50%] bg-slate-200 text-[8px] text-slate-200">
          Uploaded on 23 Nov 2022
        </h2>
      </div>
      <div className="mt-4 h-2 bg-slate-200 text-sm"></div>
      <div className="mt-1 h-2 bg-slate-200 text-sm"></div>
      <div className="mt-1 h-2 bg-slate-200 text-sm"></div>
      <div className="mt-1 h-2 bg-slate-200 text-sm"></div>
      <div className="mt-1 h-2 w-[70%] bg-slate-200 text-sm"></div>
    </div>
  );
}
