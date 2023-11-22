import Carousel from "../../ui/Carousel";

// eslint-disable-next-line react/prop-types
export default function CoffeeList({ data }) {
  // eslint-disable-next-line react/prop-types
  const items = data.map((item, i) => {
    return (
      <div
        key={i}
        className="relative flex flex-col justify-center 
        items-center space-y-1
       bg-dark-coffee rounded
        mx-3 p-4 pt-16 mt-8
        min-w-[100px]"
      >
        <div className="absolute flex justify-center items-center h-full w-3/4 -top-1/2">
          <img
            className=" max-h-[100px] drop-shadow-xl "
            src={item.image}
            alt="coffee"
          />
        </div>
        <p className="text-center  leading-3 text-xs font-thin text-white/70">
          {item.name}
        </p>
      </div>
    );
  });
  return (
    <div className="flex space-x-4  bg-black/90 rounded  pt-8 px-4 max-w-4xl">
      <Carousel>{items}</Carousel>
    </div>
  );
}
