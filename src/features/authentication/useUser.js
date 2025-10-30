import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../store/thunks/fetchCart";
import { useEffect } from "react";
// import { login } from "../../store";

export function useUser() {
  const dispatch = useDispatch();
  const { isLoading, data: user,error } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry:0
  });
  // console.log("Error",error);
  useEffect(()=>{
    if(error) return;
    if (user) {
      // console.log(user);
      // console.log("fetching cart...")
      dispatch(fetchCart());
      
    }
  },[dispatch, user,error])

  return { isLoading, isAuthenticated: user ? true : false, user};
}
