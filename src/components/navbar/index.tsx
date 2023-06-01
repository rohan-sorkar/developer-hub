import loginImg from "../../assets/images/login.jpg";
import logOutImg from "../../assets/images/logout.png";
import AuthButton from "../ui/authButton";
import NavLogo from "../ui/navLogo";
import SearchBox from "./searchBox";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  const logOutHandler = () => {};

  return (
    <nav className="sticky left-0 top-0 z-20 w-full border-b-2 border-slate-200 bg-slate-100 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pb-4 pt-3 lg:px-0">
        <NavLogo />
        <SearchBox />
        <AuthButton text="login" img={loginImg} handler={loginHandler} />
        {/* <AuthButton text="logout" img={logOutImg} handler={logOutHandler} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
