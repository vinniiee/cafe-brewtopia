import Card from "./Card";
import MainImage from "./MainImage";

// eslint-disable-next-line react/prop-types
export default function CoffeeInfo({   coffee }) {
  return (
    <div className="w-full flex justify-center lg:justify-between items-center">
      {/*eslint-disable-next-line react/prop-types */}
      <MainImage  image={coffee?.image} />

      <div className="flex justify-end w-full">
        <Card coffee={coffee} />
      </div>
    </div>
  );
}
