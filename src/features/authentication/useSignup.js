import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
    
  const { mutate: signup, isLoading:signingUp } = useMutation({
    mutationFn: async ({name, email, password }) => signupApi({name, email, password }),
    onSuccess: (data) => {
      console.log("data",data);
      queryClient.setQueryData(["user"], data.user);
      navigate("/menu", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { signup, signingUp };
}
