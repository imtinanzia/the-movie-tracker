import { Suspense, lazy } from "react";
import { RouteObject } from "react-router";
import Loader from "./components/loader";
import AuthGuard from "./components/auth-guard";
import GuestGuard from "./components/guest-guard";
import Header from "./layout/header";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("./pages/home")));
const Login = Loadable(lazy(() => import("./pages/login")));
const SignUp = Loadable(lazy(() => import("./pages/signup")));
const Movie = Loadable(lazy(() => import("./pages/movie")));
const Favourites = Loadable(lazy(() => import("./pages/favourites")));

const routes: RouteObject[] = [
  {
    path: "*",
    element: (
      <AuthGuard>
        <Header />
        <Home />
      </AuthGuard>
    ),
  },
  {
    path: "favourites",
    element: (
      <AuthGuard>
        <Header />
        <Favourites />
      </AuthGuard>
    ),
  },
  {
    path: "login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "signup",
    element: (
      <GuestGuard>
        <SignUp />
      </GuestGuard>
    ),
  },
  {
    path: "movie/:id",
    element: (
      <GuestGuard>
        <Header />
        <Movie />
      </GuestGuard>
    ),
  },
];

export default routes;
