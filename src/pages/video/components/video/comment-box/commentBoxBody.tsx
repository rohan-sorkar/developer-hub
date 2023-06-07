import { VideoType } from "../../../../../types";
import CommentItem from "./commentItem";

const CommentBoxBody = ({ video }: { video: VideoType }) => {
  const {comments} = video || {};

  return (
    <div className="comment-shadow mt-4 rounded-xl border bg-slate-50">
      {comments?.length > 0 &&
        comments.map((comment) => (
          <CommentItem key={comment.id} video={video} comment={comment} />
        ))}
    </div>
  );
};

export default CommentBoxBody;
