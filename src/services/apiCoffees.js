import supabase from "./supabase";

export const searchCoffees = async (term) => {
  console.log("term", term);
  const { data: fromName, error2 } = await supabase
    .from("coffees")
    .select()
    .textSearch("name", term.split(" "));
  if (fromName.length > 0) {
    return fromName;
  }
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
  return fromDescription;
};

export const getCoffees = async ({
  typeFilter,
  cascadeFilters,
  sortBy,
  searchTerm,
}) => {
  if (searchTerm) {
    return await searchCoffees(searchTerm);
  } else {
    const query = supabase.from("coffees").select("*");

    //TYPE FILTER
    if (typeFilter) {
      query.eq(typeFilter.key, typeFilter.value);
    }
    console.log("CascadeFilters", cascadeFilters);
    if (cascadeFilters.length > 0) {
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
  }
};
