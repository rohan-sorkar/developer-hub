import commentLikeImg from "../../../../../assets/images/comment-like2.png";
import editCommentImg from "../../../../../assets/images/editComment.webp";
import deleteCommentImg from "../../../../../assets/images/deleteComment.png";
import { CommentType } from "../../../../../types";
import moment from "moment";
import { useAppSelector } from "../../../../../app/hooks";
import gravatarUrl from "gravatar-url";

const CommentItem = ({ comment }: { comment: CommentType }) => {
  const { user } = useAppSelector((state) => state.auth) || {};
  const { email: loggedInUserEmail } = user || {};
  const isItMine = comment?.email === loggedInUserEmail;

  return (
    <div className="flex gap-2 p-5 shadow-sm">
      <div className="mt-2">
        <img
          className="mb-3 h-8 w-8 rounded-full"
          src={gravatarUrl(comment.email)}
          alt="avatar"
        />
      </div>
      <div>
        <div className="flex gap-28">
          <div>
            <h5 className="font-medium text-slate-700 md:text-[18px]">
              {comment?.name}
            </h5>
            <span className="text-sm italic md:text-base">
              {moment(comment?.date).fromNow()}
            </span>
          </div>
          {
          isItMine && (
            <div className="mt-[-20px] flex items-center gap-7">
              <img
                className="h-5 w-5 rotate-90 cursor-pointer"
                src={editCommentImg}
                alt="edit-comment"
              />
              <img
                className="h-5 w-5 cursor-pointer"
                src={deleteCommentImg}
                alt="delete-comment"
              />
            </div>
          )}
        </div>
        <p className="mb-5 mt-2 w-72 capitalize md:text-[18px]">
          {comment?.title}
        </p>
        <div className="flex items-center gap-1">
          <img
            className={`mr-1 h-7 cursor-pointer rounded md:h-9 ${isItMine && 'ring drop-shadow-xl'}`}
            src={commentLikeImg}
            alt="like"
          />
          <h5 className="rounded bg-slate-300 px-2 font-medium italic text-teal-700 md:text-lg">
            {comment?.likes?.length} <span className="text-sm">likes</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
