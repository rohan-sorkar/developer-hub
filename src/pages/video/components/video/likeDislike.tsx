import { useAppSelector } from "../../../../app/hooks";
import likeImg from "../../../../assets/svg/like.svg";
import unLikeImg from "../../../../assets/svg/unlike.svg";
import Error from "../../../../components/ui/error";
import {useDisLikeVideoMutation,useLikeVideoMutation} from
"../../../../features/videos/videosApi";
import { VideoType } from "../../../../types";


const LikeDislike = ({ video }: {video: VideoType}) => {
  const { like, dislike, id } = video;
  const { user } = useAppSelector((state) => state.auth) || {};
  const { email: loggedInUserEmail } = user || {};

  //like dislike functionality
  const [likeVideo, {isError: isLikeError}] = useLikeVideoMutation();
  const [disLikeVideo, {isError: isDisLikeError}] = useDisLikeVideoMutation();

  const handleLike = () => {
    const hasLike = like?.includes(loggedInUserEmail);
    const hasDislike = dislike?.includes(loggedInUserEmail);

    if (hasLike) return;
    if (!hasDislike) {
      likeVideo({
        id,
        video: { ...video, like: [...like, loggedInUserEmail] },
      });
    }

    const filteredDislike = dislike?.filter(
      (item) => item !== loggedInUserEmail
    );

    likeVideo({
      id,
      video: {
        ...video,
        like: [...like, loggedInUserEmail],
        dislike: filteredDislike,
      },
    });
  };
  const handleDislike = () => {
    const hasDislike = dislike?.includes(loggedInUserEmail);
    const hasLike = like?.includes(loggedInUserEmail);

    if (hasDislike) return;
    if (!hasLike) {
      disLikeVideo({
        id,
        video: { ...video, dislike: [...dislike, loggedInUserEmail] },
      });
    }

    const filteredLike = like?.filter((item) => item !== loggedInUserEmail);

    disLikeVideo({
      id,
      video: {
        ...video,
        like: filteredLike,
        dislike: [...dislike, loggedInUserEmail],
      },
    });
  };

  //error handle
  if(isLikeError || isDisLikeError) {
    return <Error/>
  }

  return (
    <div className="mb-5 flex w-48 gap-4 md:gap-10">
      <div
        onClick={handleLike}
        className={`flex cursor-pointer items-center justify-center gap-1 rounded-xl px-8 py-[3px] shadow hover:bg-slate-50 ${
          like?.includes(loggedInUserEmail) && "bg-slate-100"
        }`}
      >
        <div className="shrink-0">
          <img className="block w-5" src={likeImg} alt="Like" />
        </div>
        <div className="font-medium leading-[1.7142857] text-slate-600 md:text-lg">
          {like?.length}
        </div>
      </div>
      <div
        onClick={handleDislike}
        className={`flex cursor-pointer items-center justify-center gap-1 rounded-xl px-8 py-[3px] shadow hover:bg-slate-50 ${
          dislike?.includes(loggedInUserEmail) && "bg-slate-100"
        }`}
      >
        <div className="shrink-0">
          <img className="block w-5" src={unLikeImg} alt="Unlike" />
        </div>
        <div className="font-medium leading-[1.7142857] text-slate-600 md:text-lg">
          {dislike?.length}
        </div>
      </div>
    </div>
  );
};

export default LikeDislike;
