import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getCoffees } from "../../services/apiCoffees";

export default function useCoffees() {
  const [searchParams] = useSearchParams();
  let filterBy = [];
  const type = searchParams.get("type");
  console.log(type);
  if (type !== null && type !== "all") {
    if (type === "iced brew") {
      filterBy.push({ key: "served", value: "cold" });
    } else {
      filterBy.push({ key: "type", value: type.split(" ").at(-1) });
    }
  }
  const withMilk = searchParams.get("withMilk");
  if (withMilk !== null) {
    filterBy.push({ key: "withMilk", value: withMilk });
  }

  let sortBy;

  const { data, isLoading, error } = useQuery({
    queryKey: ["coffees", type, withMilk],
    queryFn: () => getCoffees({ filterBy, sortBy }),
    // onSuccess:()=>console.log("done!!")
  });
  console.log(data);
  return { data, isLoading, error };
}
