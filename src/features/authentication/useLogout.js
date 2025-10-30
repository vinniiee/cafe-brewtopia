import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { logout as logoutApi } from "../../services/apiAuth";
import { logout as logoutAction } from "../../store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation({
    mutationFn: async () => {
      await logoutApi();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["user"] });
      dispatch(logoutAction());
      navigate("/authentication", { replace: true });
      toast.info("You have been successfully logged out.");
    },
    onError: (err) => {
      console.log(err.message);
      toast.error("Failed to log out!");
    },
  });
  return { logout };
};
