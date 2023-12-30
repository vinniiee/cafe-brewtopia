import supabase from "./supabase";

export const searchCoffees = async (term, returnData) => {
  console.log("term", term);
  const { data: fromName, error2 } = await supabase
    .from("coffees")
    .select()
    .textSearch("name", term.split(" "));

  if (fromName.length > 0) {
    return returnData
      ? fromName
      : supabase.from("coffees").select().textSearch("name", term.split(" "));
  }
  // eslint-disable-next-line no-unused-vars
  const { data: fromDescription, error1 } = await supabase
    .from("coffees")
    .select()
    .textSearch("description", term.split(" "));

  if (error1) {
    console.log("Could not perform search!", error1.message);
    throw new Error("Could not perform search!");
  }
  if (error2) {
    console.log("Could not perform search!", error2.message);
    throw new Error("Could not perform search!");
  }
  return returnData
    ? fromDescription
    : supabase
        .from("coffees")
        .select()
        .textSearch("description", term.split(" "));
};

export const getCoffees = async ({
  typeFilter,
  cascadeFilters,
  sortBy,
  searchTerm,
}) => {
  let query;
  if (searchTerm) {
    query = searchCoffees(searchTerm, false);
  } else {
    query = supabase.from("coffees").select("*");
  }

  //TYPE FILTER
  if (!searchTerm && typeFilter) {
    query.eq(typeFilter.key, typeFilter.value);
  }
  // console.log("CascadeFilters", cascadeFilters);
  if (cascadeFilters.length > 0) {
    query.contains("attributes", cascadeFilters);
  }

  if (sortBy) {
    query.order(sortBy.value, { ascending: sortBy.ascending });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Could not fetch coffees!");
  }
  // console.log(data);
  return data;
};
