import VideoPlayer from "./videoPlayer";
import LikeDislike from "./likeDislike";
import VideoDescription from "./videoDescription";
import CommentBox from "./comment-box/commentBox";

export const Video = () => {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <VideoPlayer />
      <div>
        <LikeDislike />
        <VideoDescription />
        <CommentBox />
      </div>
    </div>
  );
};

