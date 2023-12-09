import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function useSignup() {
  const { mutate: signup, isLoading: signingUp } = useMutation({
    mutationFn: ({ name, email, password }) =>
      signupApi({ name, email, password }),
    onSuccess: (data) => {
      console.log("data", data);
      toast.info("Complete email verification then Log In.");
    },
    onError: (err) => {
      toast.error("Could not register user!");
      console.log("ERROR", err.message);
    },
  });

  return { signup, signingUp };
}
