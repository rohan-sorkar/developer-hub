import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loggedOut } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.jpg";
import logOutImg from "../../assets/images/logout.png";
import AuthButton from "../ui/authButton";
import NavLogo from "../ui/navLogo";
import SearchBox from "./searchBox";
import { logOutWithPopup } from "../../utils/logoutWithPopup";

const Navbar = () => {
  const auth = useAppSelector((state) => state.auth);
  const { accessToken, user } = auth || {};
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const logOutHandler = () => {
    logOutWithPopup(() => {
      dispatch(loggedOut({ payload: undefined }));
      localStorage.clear();
      navigate("/login");
    });
  };

  return (
    <nav className="sticky left-0 top-0 z-20 w-full border-b-2 border-slate-200 bg-slate-100 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 pb-4 pt-3 lg:px-0">
        <NavLogo />
        {accessToken && user.email ? (
          <>
            <SearchBox />
            <AuthButton text="logout" img={logOutImg} handler={logOutHandler} />
          </>
        ) : (
          <AuthButton text="login" img={loginImg} handler={loginHandler} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
