import Carousel from "../../ui/Carousel";
import { useSearchParams } from "react-router-dom";
// import useCoffees from "./useCoffees";

export default function FilterCarousel() {
  const categories = [
    { label: "All", param: "filterBy", value: "all" },
    { label: "Espresso", param: "filterBy", value: "espresso" },
    { label: "Cappuccino", param: "filterBy", value: "cappuccino" },
    { label: "Caffè Latte", param: "filterBy", value: "latte" },
    { label: "Iced Brew", param: "filterBy", value: "iced brew" },
    { label: "Caffè Mocha", param: "filterBy", value: "mocha" },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  let selected = searchParams.get("filterBy");
  if (!selected) {
    searchParams.set("filterBy", "all");
    setSearchParams(searchParams);
  }
  const handler = (item) => {
    searchParams.set(item.param, item.value);
    setSearchParams({ [item.param]: item.value });
  };

  const carouselItems = categories.map((item) => (
    <button
      onClick={() => handler(item)}
      className={`${
        selected === item.value ? "bg-dark-coffee" : "bg-light-coffee"
      } text-lg inline-block
          outline-none shadow-lg tracking-wide p-1 px-4 rounded whitespace-nowrap
          mx-2 text-white duration-200`}
      key={item.value}
    >
      {item.label}
    </button>
  ));
  return <Carousel>{carouselItems}</Carousel>;
}
