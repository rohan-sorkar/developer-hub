import ShowTotalComments from "../../../../../components/ui/showTotalComments";
import CommentInputField from "./commentInputField";

const CommentBoxHeader = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
      <ShowTotalComments/>
      <CommentInputField/>
    </div>
  );
};

export default CommentBoxHeader;
