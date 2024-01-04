import { ReactNode } from "react";
import { useAppSelector } from "../redux-toolkit/hook";
import { useLocation } from "react-router-dom";
import Home from "../pages/home";

interface Props {
  children: ReactNode;
}

const GuestGuard = ({ children }: Props) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user.username);

  return user &&
    (location.pathname === "/login" || location.pathname === "/signup") ? (
    <Home />
  ) : (
    <>{children}</>
  );
};

export default GuestGuard;
