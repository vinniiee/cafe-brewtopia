import { useSelector } from "react-redux";
import { useUser } from "../features/authentication/useUser";
import { updateUserCart } from "../services/apiUser";

export default function useUploadCart() {
  const { user } = useUser();
  const cart = useSelector((state) => state.cart);
  const uploadCart = async () => {
    console.log("oooooooooooooooo",cart);
    await updateUserCart({ cart, user });
  };
  return uploadCart;
}
