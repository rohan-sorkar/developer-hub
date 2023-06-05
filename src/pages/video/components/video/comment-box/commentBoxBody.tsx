import { CommentType } from "../../../../../types";
import CommentItem from "./commentItem";

const CommentBoxBody = ({ comments }: { comments: CommentType[] }) => {
  return (
    <div className="comment-shadow mt-4 rounded-xl border bg-slate-50">
      {comments.length > 0 &&
        comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentBoxBody;
