import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
    const temp= true;
    const navigate = useNavigate();

    useEffect(()=>{
        if(!temp)navigate("/");
    })

    return (<Outlet/>)
   
}
