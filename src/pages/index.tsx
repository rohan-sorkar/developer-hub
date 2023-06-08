import { lazy } from "react";
const Home = lazy(() => import('./home'));
const Video = lazy(() => import("./video"));
const Register = lazy(() => import("./register"));
const Login = lazy(() => import("./login"));
const NotFound = lazy(() => import("./notfound"));


export {Home, Video, Register, Login, NotFound};