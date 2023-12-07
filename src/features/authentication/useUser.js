import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../store/thunks/fetchCart";
import { useEffect } from "react";

export function useUser() {
  const dispatch = useDispatch();
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log(user);
  useEffect(()=>{
    if (user?.auth) {
      console.log("fetching cart...")
      dispatch(fetchCart(user));
    }
  },[dispatch, user])

  return { isLoading, user, isAuthenticated: user?.auth ? true : false };
}
