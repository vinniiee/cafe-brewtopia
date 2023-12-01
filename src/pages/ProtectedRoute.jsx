import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

export default function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/authentication");
  }, [isAuthenticated, isLoading, navigate]);

  return <Outlet />;
}
