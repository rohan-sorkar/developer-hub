import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { selectTag } from "../../../../features/tags/tagsSlice";
import { TagType } from "../../../../types";

const TagItem = ({tag} : {tag: TagType}) => {
  const { selectedTags } = useAppSelector(state => state.tags) || {};
  const dispatch = useAppDispatch();
  const isSelected = selectedTags.includes(tag.title) ? true : false;

  const handleSelect = (title: string) => {
    dispatch(selectTag(title))
}

  const style = `${
    isSelected
      ? "bg-slate-600 hover:bg-slate-700 text-white"
      : "bg-slate-200 hover:bg-slate-300"
  }  text-slate-600 text-sm md:text-base px-4 py-1 rounded-full cursor-pointer md:font-mono`;

  return (
    <button onClick={() => handleSelect(tag?.title)} type="button" className={style}>
      {tag.title}
    </button>
  );
};

export default TagItem;
