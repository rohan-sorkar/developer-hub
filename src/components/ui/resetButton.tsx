import deleteImg from "../../assets/images/deleteComment.png";

const ResetButton = () => {
  return (
    <button
      type="button"
      className="ml-5 flex items-center gap-2 rounded-full bg-red-100 px-6 font-medium italic text-red-600 transition hover:bg-red-200"
    >
      <img className="h-5 w-5" src={deleteImg} alt="delete" />
      Reset
    </button>
  );
};

export default ResetButton;
