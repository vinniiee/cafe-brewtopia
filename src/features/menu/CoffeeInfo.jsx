import Card from "./Card";
import MainImage from "./MainImage";

// eslint-disable-next-line react/prop-types
export default function CoffeeInfo({ index, coffee }) {
  return (
    <div className="w-full flex justify-center lg:justify-between items-center">
      {/*eslint-disable-next-line react/prop-types */}
      {coffee && <MainImage index={index} image={coffee.image} />}
      <br/>

      <div className="flex justify-end w-full">
        <Card coffee={coffee} />
      </div>
    </div>
  );
}
