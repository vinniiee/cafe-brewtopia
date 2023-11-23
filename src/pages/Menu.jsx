import {
  FilterCarousel,
  SearchBar,
  SortCarousel,
  CoffeeList,
} from "../features/menu";
import useCoffees from "../features/menu/useCoffees";
import CoffeeInfo from "../features/menu/CoffeeInfo";
import { useState } from "react";

export default function Menu() {
  const [coffee, setCoffee] = useState(0);
  const { data, error, isLoading } = useCoffees();
  console.log("Coffees", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className="relative flex flex-col w-full p-8 bg-cover sm:px-32"
        style={{ backgroundImage: "url(/wall.jpg)" }}
      >
        <div className="absolute top-0 left-0 w-1/3 z-0">
          <img className="w-full" src="/ui/menu-art.svg" alt="menu-art" />
        </div>
        <div className="flex flex-col lg:flex-row font-primary items-center w-full">
          <SearchBar />
          <div className="relative z-10flex justify-end items-end w-full lg:max-w-lg ">
            <FilterCarousel />
          </div>
        </div>
        <CoffeeInfo index={coffee} coffee={data[coffee]} />
        <div className="xl:-mt-20">
          <div className="relative z-10 -mb-6">
            <SortCarousel />
          </div>
          <div className="flex space-x-4 z-10  bg-black/90 rounded  max-w-2xl w-full lg:w-fit  pt-0 px-4 ">
            <CoffeeList data={data} setCoffee={setCoffee} />
          </div>
        </div>
      </div>
    );
  }
}
