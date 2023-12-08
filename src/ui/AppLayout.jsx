import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AppLayout() {
  return (
    <div className="min-h-screen  flex flex-col justify-between items-center max-w-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <div style={{zIndex:'10000'}}>
      <ToastContainer theme="dark"/>
      </div>
    </div>
  );
}
