import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useGetVideosQuery } from "../../features/videos/videosApi";
import SuggestionPanel from "./suggestionPanel";
import { VideoType } from "../../types";
import { searchInputChange } from "../../features/videos/videosSlice";

const SearchBox = () => {
  const { data } = useGetVideosQuery();
  const { data: videos } = data || {};
  const { searchTerm } = useAppSelector((state) => state.videos);
  const dispatch = useAppDispatch();
  const [searchResults, setSearchResults] = useState<VideoType[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchTerm !== "" && videos?.length !== undefined) {
      const filteredVideos =
        videos?.length > 0 &&
        videos.filter(
          (v) =>
            v.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            v.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      setSearchResults(filteredVideos ? filteredVideos : []);
    }
  }, [searchTerm]);

  const setTitleToSearchInput = (text: string) => {
    dispatch(searchInputChange(text));
    inputRef?.current?.focus();
  };

  return (
    <div className="hidden px-5 md:block">
      <input
        type="search"
        className="w-[450px] rounded-t-2xl border border-slate-300 py-2 pl-8 pr-3 italic caret-gray-500 shadow-md outline-none"
        placeholder="Type here to search..."
        ref={inputRef}
        value={searchTerm}
        onChange={(e) => dispatch(searchInputChange(e.target.value))}
      />
      {searchResults?.length > 2 && searchTerm && (
        <SuggestionPanel
          suggestions={searchResults}
          setTitleToSearchInput={setTitleToSearchInput}
        />
      )}
    </div>
  );
};

export default SearchBox;
