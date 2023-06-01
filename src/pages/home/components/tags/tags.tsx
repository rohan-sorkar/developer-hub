import ResetButton from "../../../../components/ui/resetButton";
import TagItem from "./tagItem";

const Tags = () => {
  return (
    <div className="mx-auto mb-6 flex max-w-7xl flex-wrap gap-2 border-b px-5 pb-7 md:pt-7 lg:px-0">
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <TagItem />
      <ResetButton />
    </div>
  );
};

export default Tags;
