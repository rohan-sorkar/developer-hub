import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link
      to={"/"}
      className="flex cursor-pointer items-center gap-2 rounded-xl border pr-3 shadow-md"
    >
      <img className="h-8 w-10 md:h-10 md:w-14 rounded-xl" src={logo} alt="video-hub" />
      <p className="font-medium italic text-slate-700 text-sm md:text-lg">Developer Hub</p>
    </Link>
  );
};

export default NavLogo;
