import { useState } from "react";
import useSearchCoffees from "./useSearchCoffees";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false);
  const { data, isLoading, error } = useSearchCoffees(searchTerm);
  console.log(data);
  console.log(isLoading);
  console.log(error);
  // let timer;
  const handler = async (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    // clearTimeout(timer);
    // timer = setTimeout(() => setSearchTerm(e.target.value), 100);
  };

  return (
    <div className={`flex justify-center items-center w-full lg:w-2/3`}>
      <div
        className={` w-full lg:w-1/2 flex justify-center items-center ${
          focus ? "scale-110 shadow-xl" : "scale-100 shadow"
        } duration-200`}
      >
        <div className="w-[20px] -mr-8 z-20">
          <img className="w-full" src="/ui/search-icon.svg" alt="search-icon" />
        </div>
        <form className="w-full" onSubmit={handler}>
          <input
            className="w-full bg-black/40 p-2 px-4 pl-12
                tracking-wider  font-light
                rounded  z-10 outline-none borber-black
                text-white "
            type="text"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={searchTerm}
            onChange={handler}
            placeholder="Search Coffee..."
          />
        </form>
      </div>
    </div>
  );
}
