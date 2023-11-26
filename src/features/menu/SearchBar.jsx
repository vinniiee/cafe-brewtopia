import { useState } from "react";
import useSearchCoffees from "./useSearchCoffees";
import SearchResultsItem from "../../components/menu/SearchResultsItem";
import SearchResults from "../../components/menu/SearchResults";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false);
  // const [showResults,setShowResults] = useState(false);
  const { data, isLoading } = useSearchCoffees(searchTerm);
  const loading = isLoading && searchTerm.length > 3;
  const handler = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  let searchResults = data?.map((item) => {
    return <SearchResultsItem key={item.name} item={item} />;
  });
  const [searchParams, setSearchParams] = useSearchParams();

  function submitHandler(e) {
    e.preventDefault();
    if (searchResults.length > 0) {
      setSearchParams({ search: searchTerm });
      setFocus(false);
    }
  }

  return (
    <div
      className={`relative  flex justify-center items-center w-full `}
      style={{ zIndex: "101" }}
    >
      <div
        className={`relative w-full max-w-xl flex justify-center items-center ${
          focus ? "sm:scale-110 shadow-xl" : "scale-100 shadow"
        } duration-200`}
      >
        <div onClick={() => setFocus(true)}>
          {focus && searchResults?.length > 0 && (
            <SearchResults searchResults={searchResults} loading={loading} />
          )}
        </div>

        <div className="w-[20px] -mr-8 z-20">
          <img className="w-full" src="/ui/search-icon.svg" alt="search-icon" />
        </div>
        <form className="w-full" onSubmit={submitHandler}>
          <input
            className="w-full bg-black/40 p-2 px-4 pl-12
                tracking-wider  font-light
                rounded  z-10 outline-none borber-black
                text-white "
            type="text"
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setTimeout(() => setFocus(false), 200);
            }}
            value={searchTerm}
            onChange={handler}
            placeholder="Search Coffee..."
          />
        </form>
      </div>
    </div>
  );
}
