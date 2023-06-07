import ShowTotalComments from "../../../../../components/ui/showTotalComments";
import { VideoType } from "../../../../../types";
import CommentInputField from "./commentInputField";

const CommentBoxHeader = ({video}: {video: VideoType}) => {
  return (
    <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
      <ShowTotalComments totalComments={video?.comments?.length}/>
      <CommentInputField video={video}/>
    </div>
  );
};

export default CommentBoxHeader;
