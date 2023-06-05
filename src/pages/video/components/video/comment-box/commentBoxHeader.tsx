import ShowTotalComments from "../../../../../components/ui/showTotalComments";
import CommentInputField from "./commentInputField";

const CommentBoxHeader = ({totalComments}: {totalComments: number}) => {
  return (
    <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
      <ShowTotalComments totalComments={totalComments}/>
      <CommentInputField/>
    </div>
  );
};

export default CommentBoxHeader;
