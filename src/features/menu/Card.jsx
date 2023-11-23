import Beans from "../../assets/Beans";
import Flame from "../../assets/Flame";

// eslint-disable-next-line react/prop-types
export default function Card({coffee}) {
  // eslint-disable-next-line react/prop-types
  const {rating,image,name,description,price,sizes} = coffee;
  let ratingDisplay = ""+rating;
  ratingDisplay = ratingDisplay.length>1?ratingDisplay:ratingDisplay+".0";
  console.log("coffee",coffee)
  return (
    <div
      className="relative flex flex-col justify-center   bg-black/90 rounded
       font-primary text-white w-full tracking-wide
       p-6 max-w-md"
    >
      <div className="absolute top-1/5 left-0 w-full h-full z-0 opacity-30 overflow-hidden">
        <Flame className="relative w-full bottom-1/5 -left-1/2 h-4/5" />
      </div>
      <div className="absolute right-0 bottom-1/3 opacity-80">
        <Beans size={125} color={"dark-coffee-2"} />
      </div>
      <div className=" flex w-full justify-between items-center z-10">
        <div className="relative w-1/5 bottom-4">
          <div className="absolute z-10 w-full">
            <img className="w-full" src="/ui/rating-art.svg" alt="rating" />
          </div>
          <p className="relative z-20 text-8xl bottom-4 left-2 font-semibold">
            {ratingDisplay}
          </p>
        </div>
        <div className="relative h-full flex sm:w-[200px] justify-center  bottom-10">
          <img
            className="h-[120px] sm:h-[200px] shadow-lg"
            src={image}
            alt="coffee"
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2 z-10">
        <div className="flex justify-start items-center space-x-2">
          <h4 className="text-2xl sm:text-3xl  tracking-wide">{name}</h4>
          <div className=" bg-dark-coffee p-0.5 px-2 rounded-xl text-xs ">
            <p className="mt-0.5">Hot</p>
          </div>
        </div>
        <div
          className="flex justify-between items-center
            text-sm font-light"
        >
          <p>&#8377; {price[0]}/-</p>
          <p>{sizes[0]} ml</p>
        </div>
        <p className="leading-5 font-extralight h-[80px] md:h-[40px]">
          {description}
        </p>
        <div className="flex justify-between space-x-2 items-center py-8">
          <button className="rounded p-1 px-2 w-full text-lg  bg-light-coffee">
            Regular
          </button>
          <button className="rounded p-1 px-2 w-full  text-lg bg-dark-coffee">
            Grande
          </button>
          <button className="rounded p-1 px-2 w-full  text-lg bg-light-coffee">
            Venti
          </button>
        </div>
      </div>
    </div>
  );
}
