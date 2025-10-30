<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCoffees } from "../../services/apiCoffees";

export default function useCoffees() {
  const [searchParams] = useSearchParams();

  //  "type" Filter
  let filterBy = searchParams.get("filterBy");
  if (filterBy == "all"){
    filterBy=null;
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
  let sortBy=null, ascending=true;

  if (sort) {
    sortBy = sort[0];
    ascending = sort[1] === "asc";
  }

  // Search Params
  const searchTerm = searchParams.get("search");

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "coffees",
      filterBy || "",
      withMilk || "",
      served || "",
      sortBy || "",
      searchTerm || "",
      ascending ,
    ],
    queryFn: async () => {
      const params = {
        filterBy,
        sortBy,
        cascadeFilters,
        searchTerm,
        ascending,
      }
      console.log("Fetching data with params:",params);


      let d = await getCoffees({
        filterBy,
        sortBy,
        cascadeFilters,
        searchTerm,
        ascending,
      });
      console.log("Data fetched:", d);
      return d;
    },
    onSuccess: (data) => console.log("done!!", data),
    onError: (err) => console.error("Fetch failed:", err),
  });
  // console.log(data);
  return { data, isLoading, error };
}
=======
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCoffees } from "../../services/apiCoffees";

export default function useCoffees() {
  const [searchParams] = useSearchParams();

  //  "type" Filter
  let filterBy = searchParams.get("filterBy");
  if (filterBy == "all"){
    filterBy=null;
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
  let sortBy=null, ascending=true;

  if (sort) {
    sortBy = sort[0];
    ascending = sort[1] === "asc";
  }

  // Search Params
  const searchTerm = searchParams.get("search");

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "coffees",
      filterBy || "",
      withMilk || "",
      served || "",
      sortBy || "",
      searchTerm || "",
      ascending ,
    ],
    queryFn: async () => {
      const params = {
        filterBy,
        sortBy,
        cascadeFilters,
        searchTerm,
        ascending,
      }
      console.log("Fetching data with params:",params);


      let d = await getCoffees({
        filterBy,
        sortBy,
        cascadeFilters,
        searchTerm,
        ascending,
      });
      console.log("Data fetched:", d);
      return d;
    },
    onSuccess: (data) => console.log("done!!", data),
    onError: (err) => console.error("Fetch failed:", err),
  });
  // console.log(data);
  return { data, isLoading, error };
}
>>>>>>> origin/main
