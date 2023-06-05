import VideoPlayer from "./videoPlayer";
import LikeDislike from "./likeDislike";
import VideoDescription from "./videoDescription";
import CommentBox from "./comment-box/commentBox";
import { VideoType } from "../../../../types";

export const Video = ({video} : {video: VideoType}) => {
  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
      <VideoPlayer link={video.link} title={video.title}/>
      <div>
        <LikeDislike video={video} />
        <VideoDescription video={video}/>
        <CommentBox video={video}/>
      </div>
    </div>
  );
};

