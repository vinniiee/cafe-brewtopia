import { FilterCarousel, Card } from "../features/menu";
import CoffeeList from "../features/menu/CoffeeList";
import SortCarousel from "../features/menu/SortCarousel";
import useCoffees from "../features/menu/useCoffees";

export default function Menu() {
  const { data, error, isLoading } = useCoffees();
  console.log("Coffees", data);
  // const {data} = values;
  console.log("error", error);
  console.log("isLoading", isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className="flex flex-col w-full p-8 bg-cover"
        style={{ backgroundImage: "url(/wall.jpg)" }}
      >
        <FilterCarousel />
        <div className="w-full flex justify-center items-center">
          <Card />
        </div>
        <SortCarousel />
        <CoffeeList data={data}/>
      </div>
    );
  }
}
