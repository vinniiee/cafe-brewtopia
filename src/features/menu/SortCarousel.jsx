import { useState } from "react";
import Carousel from "../../ui/Carousel";
// import { useSearchParams } from "react-router-dom";
// import useCoffees from "./useCoffees";

export default function SortCarousel() {
  const [selected, setSelected] = useState("");
  const categories = [
    "By Rating",
    "With Milk",
    "Without Milk",
    "Price Asc.",
    "Price Desc.",
    "Hot",
  ];
//   const { data, error, isLoading } = useCoffees();
//   console.log("Coffees", data);
  // const {data} = values;
//   console.log("error", error);
//   console.log("isLoading", isLoading);
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const selected = searchParams.get("type");
  //   if (!selected) {
  //     setSearchParams({ type: "all" });
  //   }
  //   const handler = (item) => {
  //     setSearchParams({ type: item.toLowerCase() });
  //   };

  const carouselItems = categories.map((item) => (
    <button
      onClick={() => setSelected(item)}
      className={`${
        selected === item ? "bg-dark-coffee" : "bg-light-coffee"
      } text-lg inline-block
          outline-none shadow-lg tracking-wide p-1 px-4 rounded whitespace-nowrap
          mx-2 text-white duration-200`}
      key={item}
    >
      {item}
    </button>
  ));
  return (
    <div className="font-primary w-full">
      <div className="flex justify-start items-end w-full ">
        <Carousel>{carouselItems}</Carousel>
      </div>
    </div>
  );
}
