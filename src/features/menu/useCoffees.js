import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCoffees } from "../../services/apiCoffees";

export default function useCoffees(returnData) {
  const [searchParams] = useSearchParams();
  let typeFilter;
  
  //  "type" Filter
  const filterBy = searchParams.get("filterBy");
  if (filterBy !== null && filterBy !== "all"){
    if (filterBy === "iced brew") {
      typeFilter = { key: "served", value: "cold" };
    } else {
      typeFilter = { key: "type", value: filterBy };
    }
  }

  let cascadeFilters = [];

  //  "withMilk" Filter
  const withMilk = searchParams.get("withMilk");
  if (withMilk !== null) {
    cascadeFilters.push(withMilk);
  }

  //  "served" Filter
  const served = searchParams.get("served");
  if (served !== null) {
    cascadeFilters.push(served);
  }

  // Sort By
  const sort = searchParams.get("sortBy")?.split("-");
  let sortBy;

  if (sort) {
    sortBy = { ascending: sort[1] === "asc", value: sort[0] };
  }

 // Search Params
  const searchTerm = searchParams.get("search");

  const { data, isLoading, error } = useQuery({
    queryKey: ["coffees", filterBy, withMilk,served,sort,searchTerm],
    queryFn: () => getCoffees({ typeFilter, sortBy, cascadeFilters, searchTerm,returnData }),
    // onSuccess:()=>console.log("done!!")
  });
  // console.log(data);
  return { data, isLoading, error };
}
