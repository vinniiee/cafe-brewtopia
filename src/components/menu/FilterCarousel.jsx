import { useDispatch } from "react-redux";
import Carousel from "../../ui/Carousel";
import { useSearchParams } from "react-router-dom";
import { resetSortParams } from "../../store";
import { useEffect } from "react";
import { categories } from "../../data/categories";

export default function FilterCarousel() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  let selected = searchParams.get("filterBy");
  useEffect(() => {
    // console.log("Selected",selected);
    if (!selected) {
      searchParams.set("filterBy", "all");
      setSearchParams(searchParams);
    }
  });
  const handler = (item) => {
    searchParams.set(item.param, item.value);
    setSearchParams({ [item.param]: item.value });
    dispatch(resetSortParams());
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
