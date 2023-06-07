import commentLikeImg from "../../../../../assets/images/comment-like2.png";
import commentDislikeImg from '../../../../../assets/images/dislike.png';
import editCommentImg from "../../../../../assets/images/editComment.webp";
import deleteCommentImg from "../../../../../assets/images/deleteComment.png";
import { CommentType, VideoType } from "../../../../../types";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import gravatarUrl from "gravatar-url";
import { useDeleteCommentMutation, useLikeCommentMutation } from "../../../../../features/comments/commentsApi";
import Error from "../../../../../components/ui/error";
import { editComment } from "../../../../../features/comments/commentsSlice";

const CommentItem = ({ video,  comment }: { video: VideoType, comment: CommentType }) => {
  const { user } = useAppSelector((state) => state.auth) || {};
  const { email: loggedInUserEmail } = user || {};
  const dispatch = useAppDispatch();
  const [likeVideo, {isError: isLikeError}] = useLikeCommentMutation();
  
  const [deleteComment, {isError: isDeleteError}] = useDeleteCommentMutation();
  const handleDeleteComment = (deleteId: string) => {
    const copiedVideo = {...video};
    const filteredComments = copiedVideo.comments.filter((v) => v.id !== deleteId);
    const updatedVideo = {...copiedVideo, comments: filteredComments};
    deleteComment({videoId: video?.id, updatedVideo});
  }

  const handleLikeComment = (commentId: string) => {
    if(commentId == null) return;
    const copyComments = [...video.comments];
    const comment = copyComments.find((c) => c.id === commentId);
    const hasLike = comment?.likes.includes(loggedInUserEmail);
    let updateLikes: string[];
    if (hasLike) {
      const filteredLikes = comment?.likes.filter((like) => like !== loggedInUserEmail);
      updateLikes = filteredLikes ? filteredLikes : [];
    } else {
      const clonedLikes = Object.assign([], comment?.likes);
      updateLikes = [...clonedLikes, loggedInUserEmail];
    }

    const updatedComments = copyComments.map((value) => {
      if (value.id === commentId) {
        value = { ...value, likes: [...updateLikes] };
      }
      return value;
    });

    const updatedVideo = { ...video, comments: [...updatedComments] };
    
    likeVideo({videoId: video?.id, updatedVideo});
  }

  if(isLikeError || isDeleteError) return <Error/>;

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
          comment?.email === loggedInUserEmail && (
            <div className="mt-[-20px] flex items-center gap-7">
              <img
                onClick={() => dispatch(editComment(comment?.id))}
                className="h-5 w-5 rotate-90 cursor-pointer"
                src={editCommentImg}
                alt="edit-comment"
              />
              <img
                onClick={() => handleDeleteComment(comment?.id)}
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
            onClick={() => handleLikeComment(comment.id)}
            className={`mr-1 h-7 cursor-pointer rounded md:h-9`}
            src={comment?.likes?.includes(loggedInUserEmail) ? commentDislikeImg : commentLikeImg}
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
