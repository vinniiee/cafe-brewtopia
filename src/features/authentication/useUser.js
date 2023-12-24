import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../store/thunks/fetchCart";
import { useEffect } from "react";
import { login } from "../../store";

export function useUser() {
  const dispatch = useDispatch();
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry:0
  });
  // console.log(user);
  useEffect(()=>{
    if (user?.auth) {
      console.log("fetching cart...")
      dispatch(fetchCart(user));
      dispatch(login(user));
    }
  },[dispatch, user])

  return { isLoading, user, isAuthenticated: user?.auth ? true : false };
}
