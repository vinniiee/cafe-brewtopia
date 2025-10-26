import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useUser } from "../features/authentication/useUser";
import { useSelector } from "react-redux";
// import { useUser } from "../features/authentication/useUser";

export default function ProtectedRoute() {
  const { isAuthenticated ,isLoading} = useSelector((state) => state.auth);
  // const { user} = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if ( !isLoading && (!isAuthenticated)) navigate("/authentication");
  }, [isAuthenticated, navigate,isLoading]);

  return <Outlet />;
}
