import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function ProtectedRoute() {
    const authenticated= false;
    const navigate = useNavigate();

    useEffect(()=>{
        if(!authenticated)navigate("/authentication");
    })

    return (<Outlet/>)
   
}
