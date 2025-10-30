import { useQuery } from "@tanstack/react-query";
import { fetchAllOrders } from "../../services/apiOrder";
import { toast } from "react-toastify";

function useAllOrders(  ) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => fetchAllOrders(),
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
