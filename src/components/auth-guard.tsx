import { ReactNode } from "react";
import { useAppSelector } from "../redux-toolkit/hook";
import Login from "../pages/login";

interface Props {
  children: ReactNode;
}

const AuthGuard = ({ children }: Props) => {
  const user = useAppSelector((state) => state.user.username);

  return user ? <>{children}</> : <Login />;
};

export default AuthGuard;
