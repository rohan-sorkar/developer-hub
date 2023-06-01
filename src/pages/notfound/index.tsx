import notfoundImg from "../../assets/images/notfound.gif";
import notFoundStatusImg from "../../assets/images/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative flex min-h-[calc(100vh_-_157px)] flex-col items-center justify-center">
      <div className="absolute top-[15%]">
        <img
          className="w-32 object-contain sm:w-48"
          src={notFoundStatusImg}
          alt="404"
        />
      </div>
      <img src={notfoundImg} alt="notfound" />
      <div className="absolute bottom-[16%] px-2 text-center sm:bottom-[18%]">
        <h2 className="text-xl font-medium italic tracking-wider text-slate-600 sm:text-2xl">
          Look like you're lost
        </h2>
        <p className="pt-1 text-xs text-slate-500 sm:text-base">
          the page you are looking for not available
        </p>
        <Link
          to="/"
          className="mt-5 inline-block bg-green-500 px-8 py-1 font-medium italic text-white"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
