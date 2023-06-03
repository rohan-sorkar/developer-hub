import { useAppDispatch } from "../../app/hooks";
import deleteImg from "../../assets/images/deleteComment.png";
import { resetTag } from "../../features/tags/tagsSlice";

const ResetButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(resetTag())}
      type="button"
      className="flex items-center gap-2 rounded-full bg-red-100 px-6 py-1 font-medium italic text-red-600 transition hover:bg-red-200 md:ml-5"
    >
      <img className="h-5 w-5" src={deleteImg} alt="delete" />
      Reset
    </button>
  );
};

export default ResetButton;
