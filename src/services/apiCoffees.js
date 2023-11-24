import supabase from "./supabase";

export const getCoffees = async ({ typeFilter, cascadeFilters, sortBy }) => {
  const query = supabase.from("coffees").select("*");

  //TYPE FILTER
  if (typeFilter) {
    query.eq(typeFilter.key, typeFilter.value)
    
  }
  console.log("CascadeFilters",cascadeFilters);
  if(cascadeFilters.length>0){
    query.contains("attributes", cascadeFilters);
  }

  // WITH MILK & SERVED FILTER
  // filterBy.forEach((filter) => query.eq(attributes, filter.value));

  if (sortBy) {
    query.order(sortBy.value, { ascending: sortBy.ascending });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Could not fetch coffees!");
  }
  console.log(data);
  return data;
};
