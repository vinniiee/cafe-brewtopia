import Carousel from "../../ui/Carousel";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSortParams } from "../../store";

export default function SortCarousel() {
  const categories = [
    { label: "By Rating", param: "sortBy", value: "rating-asc" },
    { label: "With Milk", param: "withMilk", value: "withMilk" },
    { label: "Without Milk", param: "withMilk", value: "withoutMilk" },
    { label: "Price Asc.", param: "sortBy", value: "price-asc" },
    { label: "Price Desc.", param: "sortBy", value: "price-dsc" },
    { label: "Hot", param: "served", value: "hot" },
    { label: "Cold", param: "served", value: "cold" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const sortParams = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  let type = searchParams.get("filterBy");

  const handler = (item) => {
    dispatch(
      updateSortParams({
        ...sortParams,
        [item.param]: sortParams[item.param] === item.value ? "" : item.value,
      })
    );
    let param = searchParams.get(item.param);
    if (param === item.value) {
      searchParams.delete(item.param);
    } else {
      searchParams.set(item.param, item.value);
    }

    setSearchParams(searchParams);
  };

  const carouselItems = categories.map((item, i) => {
    if (
      type === "iced brew" &&
      (item.value === "hot" || item.value === "cold")
    ) {
      return;
    }
    return (
      <button
        onClick={() => handler(item)}
        className={`${
          sortParams[item.param] === item.value
            ? "bg-dark-coffee"
            : "bg-light-coffee"
        } text-lg inline-block
          outline-none shadow-lg tracking-wide p-1 px-4 rounded whitespace-nowrap
          mx-2 text-white duration-200`}
        key={i}
      >
        {item.label}
      </button>
    );
  });
  return (
    <div className="font-primary w-full">
      <div className="flex justify-start items-end w-full ">
        <Carousel>{carouselItems}</Carousel>
      </div>
    </div>
  );
}
