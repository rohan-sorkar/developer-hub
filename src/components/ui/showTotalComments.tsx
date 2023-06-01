import commentImg from "../../assets/images/comment.png";

const ShowTotalComments = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-8 md:w-10" src={commentImg} alt="comment" />
      <h3 className="text-xl font-medium text-slate-600">
        Comments <strong className="text-lg text-teal-700">3</strong>
      </h3>
    </div>
  );
};

export default ShowTotalComments;
