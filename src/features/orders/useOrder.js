import { useQuery } from "@tanstack/react-query";
import { fetchOrderById } from "../../services/apiOrder";

function useOrder({ id }) {
  const { data, isLoading, error } = useQuery({
    queryKey: [id],
    queryFn: async () => fetchOrderById(id),
  });
  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
  return { order: data, isLoading };
}

export default useOrder;
