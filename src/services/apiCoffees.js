import supabase from "./supabase";

export const getCoffees = async ({ filterBy, sortBy }) => {
  const query = supabase.from("coffees").select("*");
//   console.log(filterBy);
  filterBy.forEach((filter) => query.eq(filter.key, filter.value));

  if (sortBy) {
    query.order(sortBy.key, { ascending: sortBy.value === "asc" });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Could not fetch coffees!");
  }
  console.log(data);
  return  data ;
};
