import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Navbar  />
      <Outlet/>
      <Footer />
    </div>
  );
}
