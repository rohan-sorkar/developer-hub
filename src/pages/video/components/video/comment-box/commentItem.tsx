import userImg from "../../../../../assets/images/logo.png";
import commentLikeImg from "../../../../../assets/images/comment-like2.png";
import editCommentImg from "../../../../../assets/images/editComment.webp";
import deleteCommentImg from "../../../../../assets/images/deleteComment.png";

const CommentItem = () => {
  return (
    <div className="flex gap-2 p-5 shadow-sm">
      <div className="mt-2">
        <img className="mb-3 h-8 w-8 rounded-full" src={userImg} alt="avatar" />
      </div>
      <div>
        <div className="flex gap-28">
          <div>
            <h5 className="font-medium text-slate-700 md:text-[18px]">
              Debra king
            </h5>
            <span className="text-sm italic md:text-base">2 Months ago</span>
          </div>

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
        </div>
        <p className="mb-5 mt-2 w-72 capitalize md:text-[18px]">
          well explained debra king🔥
        </p>
        <div className="flex items-center gap-1">
          <img
            className="mr-1 h-7 cursor-pointer rounded ring drop-shadow-xl md:h-9"
            src={commentLikeImg}
            alt="like"
          />
          <h5 className="rounded bg-slate-300 px-2 font-medium italic text-teal-700 md:text-lg">
            15 <span className="text-sm">likes</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
