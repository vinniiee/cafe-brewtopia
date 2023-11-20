import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading:loggingIn } = useMutation({
    mutationFn: async ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["user"], data.user);
      navigate("/menu", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { login, loggingIn };
}
