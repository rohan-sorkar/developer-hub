import likeImg from "../../../../assets/svg/like.svg";
import unLikeImg from "../../../../assets/svg/unlike.svg";

const LikeDislike = () => {
  return (
    <div className="mb-5 flex w-48 gap-4 md:gap-10">
      <div
        className={`flex cursor-pointer items-center justify-center gap-1 rounded-xl px-8 py-[3px] shadow hover:bg-slate-50`}
      >
        <div className="shrink-0">
          <img className="block w-5" src={likeImg} alt="Like" />
        </div>
        <div className="md:text-lg font-medium leading-[1.7142857] text-slate-600">
          5
        </div>
      </div>
      <div
        className={
          "flex cursor-pointer items-center justify-center gap-1 rounded-xl bg-slate-100 px-8 py-[3px] shadow"
        }
      >
        <div className="shrink-0">
          <img className="block w-5" src={unLikeImg} alt="Unlike" />
        </div>
        <div className="md:text-lg font-medium leading-[1.7142857] text-slate-600">
          2
        </div>
      </div>
    </div>
  );
};

export default LikeDislike;
