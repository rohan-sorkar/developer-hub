import NoCommentsText from "../../../../../components/ui/noCommentsText";
import { VideoType } from "../../../../../types";
import CommentBoxBody from "./commentBoxBody";
import CommentBoxHeader from "./commentBoxHeader";

const CommentBox = ({ video }: { video: VideoType }) => {
  return (
    <div className="my-5 md:my-8">
      <CommentBoxHeader totalComments={video?.comments?.length} />
      {video?.comments?.length > 0 ? <CommentBoxBody comments={video.comments}/> : <NoCommentsText />}
    </div>
  );
};

export default CommentBox;
