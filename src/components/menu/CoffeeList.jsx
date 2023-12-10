import { useEffect, useState } from "react";
import Carousel from "../../ui/Carousel";
import useCoffees from "../../features/menu/useCoffees";
import CoffeeListItem from "./CoffeeListItem";
import { useSearchParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CoffeeList({ setCoffee, selected }) {
  const { data } = useCoffees();
  useSearchParams();
  useEffect(() => {}, [data, selected]);
  const [active, setActive] = useState(true);
  // eslint-disable-next-line react/prop-types
  const items = data.map((item, i) => {
    return (
      <CoffeeListItem
        key={i}
        setCoffee={setCoffee}
        active={active}
        setActive={setActive}
        item={item}
        i={i}
        selected={selected}
      />
    );
  });
  return (
    <Carousel>
      {items.length === 0 ? (
        <p className="font-primary tracking-wide text-white opacity-70">
          No Coffees found for these selections.
        </p>
      ) : (
        items
      )}
    </Carousel>
  );
}
