<<<<<<< HEAD
import Spinner from "../ui/Spinner";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ProtectedRoute →", { isAuthenticated, isLoading });
    if (!isLoading && !isAuthenticated) {
      navigate("/authentication");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />; 

  return <Outlet />;
}
=======
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
>>>>>>> origin/main
