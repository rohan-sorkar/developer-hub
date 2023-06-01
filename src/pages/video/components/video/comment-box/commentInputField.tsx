import emojiImg from "../../../../../assets/images/emoji.webp";

const CommentInputField = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="w-80 rounded border border-gray-300 py-1 pl-6 pr-12 italic text-gray-600 caret-slate-400 outline-none focus:shadow-inner"
        placeholder="Write a comment..."
      />
      <img
        className="absolute right-0 top-0 mr-5 mt-1 h-7 w-7 cursor-pointer"
        src={emojiImg}
        alt="emoji"
      />
      <div className="absolute pb-7">{/* here will be the emoji picker */}</div>
    </div>
  );
};

export default CommentInputField;
