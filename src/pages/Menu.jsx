import {
  FilterCarousel,
  SearchBar,
  SortCarousel,
  CoffeeList,
  CoffeeInfo,
} from "../features/menu";
import useCoffees from "../features/menu/useCoffees";
import { useState } from "react";

export default function Menu() {
  const [coffee, setCoffee] = useState(0);
  const { data, isLoading } = useCoffees();
  if(coffee >= data?.length){
    setCoffee(0);
  }
  
  return (
    <div
      className="relative flex flex-col w-full p-8 bg-cover sm:px-32"
      style={{ backgroundImage: "url(/wall.jpg)" }}
    >
      <div className="absolute top-0 left-0 w-1/3 z-0">
        <img className="w-full" src="/ui/menu-art.svg" alt="menu-art" />
      </div>
      <div className="flex flex-col lg:flex-row font-primary justify-between items-center w-full">
        <div className="w-full">
          <SearchBar setCoffee={setCoffee} />
        </div>
        <div className="relative z-10 flex justify-end items-end w-full lg:w-1/2 lg:max-w-lg ">
          <FilterCarousel isLoading={isLoading} />
        </div>
      </div>
      <CoffeeInfo coffee={data ? data[coffee] : null} />
      <div className="flex flex-col xl:-mt-20">
        <div className="relative z-10 -mb-6">
          <SortCarousel />
        </div>
        <div className="flex space-x-4 z-10  bg-black/90 rounded  max-w-2xl w-full lg:w-fit min-h-[150px]   pt-0 px-4 ">
          {data && (
            <CoffeeList data={data} setCoffee={setCoffee} selected={coffee} />
          )}
        </div>
      </div>
    </div>
  );
}
