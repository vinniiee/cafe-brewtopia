import Card from "./Card/Card";
import MainImage from "./MainImage";

// eslint-disable-next-line react/prop-types
export default function CoffeeInfo() {
  return (
    <div className="w-full flex justify-center lg:justify-between items-center">
      {/*eslint-disable-next-line react/prop-types */}
      <MainImage />
      <div className="flex justify-center lg:justify-end w-full">
        <Card />
      </div>
    </div>
  );
}
