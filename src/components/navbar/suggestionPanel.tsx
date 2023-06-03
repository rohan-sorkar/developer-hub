import { VideoType } from "../../types";

interface PropsType {
  suggestions: VideoType[];
  setTitleToSearchInput: (text: string) => void;
}

const SuggestionPanel = (props: PropsType) => {
  const {suggestions, setTitleToSearchInput} = props;

  return (
    <div className="absolute mt-2 w-[450px] rounded-b-xl border border-slate-300 bg-white shadow-md">
      {suggestions.slice(0, 7).map((item) => (
        <p
          key={item.id}
          onClick={() => setTitleToSearchInput(item.title)}
          className="cursor-pointer border-b py-3 pl-8 pr-4 italic text-slate-600 shadow-sm  hover:bg-teal-50"
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default SuggestionPanel;
