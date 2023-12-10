import {
  FilterCarousel,
  SearchBar,
  SortCarousel,
  CoffeeList,
  CoffeeInfo,
} from "../features/menu";
import Spinner from "../ui/Spinner";
import useCoffees from "../features/menu/useCoffees";
import { createContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const CoffeeContext = createContext();

export default function Menu() {
  const [coffee, setCoffee] = useState(0);
  const { data, isLoading } = useCoffees();
  if (data?.length > 0 && coffee >= data?.length) {
    setCoffee(0);
  }
  return (
    <CoffeeContext.Provider value={{ coffee: data?.at(coffee), isLoading }}>
      <div
        className="relative flex flex-col justify-center items-around min-w-screen min-h-screen w-full pt-24 sm:pt-36 lg:pt-32 p-8 bg-cover sm:px-16"
        style={{ backgroundImage: "url(/wall.jpg)" }}
      >
        <div className="absolute top-0 left-0 w-2/5 z-0">
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
        <div className="flex flex-col lg:-mt-32">
          <div className="relative z-10 -mb-6 lg:max-w-lg xl:max-w-2xl">
            <SortCarousel />
          </div>

          <motion.div
           className="flex space-x-4 z-10 items-center
          bg-black/90 rounded  xl:max-w-2xl min-w-[350px]
           max-w-2xl lg:max-w-lg w-full lg:w-fit min-h-[165px]
           pt-0 px-4 "
           initial={{width:'100%',x:'-20%'}}
           animate={{width:'100%',x:'0%', transition:{duration:1.5}}}
          //  transition={{duration:3, type:'spring'}}
           >
            
            {!isLoading ? (
              data?.length > 0 ? (
                <AnimatePresence>
                  <CoffeeList
                  data={data}
                  setCoffee={setCoffee}
                  selected={coffee}
                />
                </AnimatePresence>
              ) : (
                <p className="text-white/90 font-primary ml-8 tracking-wide font-thin">
                  No Coffee found for this set of selections.
                </p>
              )
            ) : (
              <div className="text-white w-full flex justify-center items-center mt-4">
                {" "}
                <Spinner size={30} />{" "}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </CoffeeContext.Provider>
  );
}
