
const API_BASE_URL = import.meta.env.VITE_API_URL || 
"http://localhost:8080/api";

/**
 * Get the token from localStorage
 */
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token
    ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
};

export const searchCoffees = async (term) => {
  try {
    console.log("Searching coffees for term:", term);
    const res = await fetch(
      `${API_BASE_URL}/coffees?term=${term}`,
      { headers: getAuthHeaders() }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("Search failed:", errText);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error("Error in searchCoffees:", err.message);
    return [];
  }
};

export const getCoffees = async ({
  filterBy,
  cascadeFilters,
  sortBy,
  searchTerm,
  ascending
}) => {
  try {
    let url = `${API_BASE_URL}/coffees`;

    if (searchTerm) {
      const searchResults =  await searchCoffees(searchTerm)|| [];
      return searchResults || [];
    }

    const params = new URLSearchParams();

    if (filterBy) {
      params.append("type", filterBy);
    }

    if (cascadeFilters && cascadeFilters.length > 0) {
      cascadeFilters.forEach(f => {
        params.append("attributes", f);  
      });
      
    }

    if (sortBy) {
      params.append("sortBy", sortBy);
      params.append("ascending", ascending);
    }

    if ([...params].length > 0) {
      url += `?${params.toString()}`;
    }
    console.log("Fetching coffees from URL with params:", params.toString());

    const res = await fetch(url, { headers: getAuthHeaders() });

    if (!res.ok) {
      const errText = await res.json();
      console.error("Fetch coffees failed:", errText);
      return [];
    }

    const data = await res.json();
    console.log("Fetched coffees:", data);
    return data || [];
  } catch (err) {
    console.error("Error in getCoffees:", err.message);
    return [];
  }
};
