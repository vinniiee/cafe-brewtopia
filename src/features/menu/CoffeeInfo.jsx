import Card from "./Card";
import MainImage from "./MainImage";

// eslint-disable-next-line react/prop-types
export default function CoffeeInfo({ index,coffee }) {
  // eslint-disable-next-line react/prop-types
  const { image } = coffee;
  return (
    <div className="w-full flex justify-center lg:justify-between items-center">
      <MainImage index={index} image={image} />

      <div className="flex justify-center w-full">
        <Card coffee={coffee} />
      </div>
    </div>
  );
}
