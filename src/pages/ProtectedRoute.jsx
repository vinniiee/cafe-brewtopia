import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useUser } from "../features/authentication/useUser";
import { useSelector } from "react-redux";
import { useUser } from "../features/authentication/useUser";

export default function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !user?.auth) navigate("/authentication");
  }, [isAuthenticated, navigate, user]);

  return <Outlet />;
}
