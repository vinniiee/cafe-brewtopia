import Carousel from "../../ui/Carousel";

// eslint-disable-next-line react/prop-types
export default function CoffeeList({ data, setCoffee }) {
  // eslint-disable-next-line react/prop-types
  const items = data.map((item, i) => {
    return (
      <div
        onClick={() => setCoffee(i)}
        key={i}
        className="relative flex flex-col justify-center
        group 
        items-center space-y-1
       bg-dark-coffee rounded
       hover:scale-125
        mx-3 p-4 pt-14 mt-8
        min-w-[120px] max-w-[120px] duration-200 delay-50"
      >
        <div className="absolute flex group-hover:scale-75 justify-center items-center h-full w-3/4 -top-1/2 duration-200">
          <img
            className=" max-h-[100px] drop-shadow-[15px_10px_5px_rgba(0,0,0,0.7)] "
            src={item.image}
            alt="coffee"
          />
        </div>
        <p className="text-center  leading-4 text-sm font-thin text-white/70">
          {item.name}
        </p>
      </div>
    );
  });
  return <Carousel>{items}</Carousel>;
}
