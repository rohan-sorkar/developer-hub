import SuggestionPanel from "./suggestionPanel";

const SearchBox = () => {
  return (
    <div className="px-5 hidden md:block">
      <input
        type="search"
        className="w-[450px] rounded-t-2xl border border-slate-300 py-2 pl-8 pr-3 italic caret-gray-500 shadow-md outline-none"
        placeholder="Type here to search..."
      />
      {/* <SuggestionPanel/> */}
    </div>
  );
};

export default SearchBox;
