import { useQuery } from "@tanstack/react-query";
import { fetchAllOrders } from "../../services/apiOrder";
import { toast } from "react-toastify";

function useAllOrders( userId ) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["orders", userId],
    queryFn: async () => fetchAllOrders(userId),
    onError: (err) => {
      console.log(err.message);
      toast.error("Failed to fetch orders.");
    },
    onSuccess: async (data) => {
      console.log(data);
    },
  });
  return { orders: data, error, isLoading };
}

export default useAllOrders;
