import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

export default function AppLayout() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setTimeout(() => setShow(true), 6000);
    } else {
      setShow(true);
    }
  }, [location.pathname]);
  return (
    <div className="min-h-screen flex flex-col justify-between items-center max-w-screen">
      <Navbar />
      <Outlet />
      {show && <Footer />}
      <div style={{ zIndex: "10000" }}>
        <ToastContainer theme="dark" />
      </div>
    </div>
  );
}
