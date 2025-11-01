import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading:loggingIn } = useMutation({
    mutationFn: async ({ email, password }) => loginApi({ email, password }),
    onSuccess: async (data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      
      await queryClient.invalidateQueries({queryKey:["user"]});
      toast.success("Successfully Logged In!");
      navigate("/menu", { replace: true })
      
    },
    onError: (err) => {
      
      toast.error("Could not be Logged In!");
      console.log("ERROR", err);
    },
  });

  return { login, loggingIn };
}
