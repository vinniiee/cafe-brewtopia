import Beans from "../../assets/Beans";
import Flame from "../../assets/Flame";

export default function Card() {
  return (
    <div
      className="relative flex flex-col justify-center   bg-black/90 rounded
       font-primary text-white w-full tracking-wide
       p-6 max-w-sm"
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
            4.5
          </p>
        </div>
        <div className="relative h-full flex w-[200px] justify-center  bottom-10">
          <img
            className="h-full max-h-[200px] shadow-lg"
            src="/cappuccino-freddo.png"
            alt="coffee"
          />
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2 z-10">
        <div className="flex justify-start items-center space-x-2">
          <h4 className="text-3xl  tracking-wide">Cappuccino (Wet)</h4>
          <div className=" bg-dark-coffee p-0.5 px-2 rounded-xl text-xs ">
            <p className="mt-0.5">Hot</p>
          </div>
        </div>
        <div
          className="flex justify-between items-center
            text-sm font-light"
        >
          <p>&#8377; 190/-</p>
          <p>355 ml</p>
        </div>
        <p className="leading-5 font-extralight">
          Smooth, creamy indulgence. Espresso meets velvety steamed milk,
          creating a rich, luscious Wet Cappuccino. A taste of luxury.
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
