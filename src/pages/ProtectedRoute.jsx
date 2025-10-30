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