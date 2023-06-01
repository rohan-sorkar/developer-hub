import NoCommentsText from "../../../../../components/ui/noCommentsText";
import CommentBoxBody from "./commentBoxBody";
import CommentBoxHeader from "./commentBoxHeader";

const CommentBox = () => {
  return (
    <div className="my-5 md:my-8">
      <CommentBoxHeader />
      <NoCommentsText/>
      <CommentBoxBody />
    </div>
  );
};

export default CommentBox;
