import { useQuery } from "@tanstack/react-query";
import { searchCoffees } from "../../services/apiCoffees";

export default function useSearchCoffees(searchTerm) {
  // console.log("searchTerm", searchTerm);
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      if (searchTerm.length > 3) return await searchCoffees(searchTerm,true);
      else return new Array();
    },
    
  });

  if(error){
    console.log(error);
    return {data:[],isLoading,error}
  }

  return { data, isLoading, error };
}
