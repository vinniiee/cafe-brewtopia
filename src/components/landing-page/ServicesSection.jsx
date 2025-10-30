// import Beans from "../../assets/Beans";

export default function ServicesSection() {
  return (
    <div className="w-screen relative bg-night font-primary tracking-wider font-light py-64">
      <div className="relative z-20 flex flex-col w-screen justify-center items-center   space-y-8">
        <h1 className=" text-center font-normal text-8xl text-white">
          OUR <span className="text-coffee font-semibold">SERVICES</span>
        </h1>
        <div className="flex flex-col sm:space-y-0 space-y-16 md:flex-row text-center text-white justify-around items-center p-8">
          <div className="flex flex-col justify-between items-center p-4 space-y-8 space-x-4 ">
            <img src="/service-1.png" alt="service-1" />
            <h3 className="font-normal  text-5xl">BEANS</h3>
            <p className="max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              animi nesciunt voluptatibus minima? Necessitatibus et consequuntur
              nesciunt odit magni architecto sapiente recusandae, repellendus
              fuga sit. Voluptatum itaque suscipit pariatur non.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center p-4 space-y-8 space-x-4">
            <img src="/service-2.png" alt="service-2" />
            <h3 className="font-normal  text-5xl">COFFEE</h3>
            <p className="max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              animi nesciunt voluptatibus minima? Necessitatibus et consequuntur
              nesciunt odit magni architecto sapiente recusandae, repellendus
              fuga sit. Voluptatum itaque suscipit pariatur non.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center p-4 space-y-8 space-x-4">
            <img src="/service-3.png" alt="service-3" />
            <h3 className="font-normal  text-5xl">BREAKFAST</h3>
            <p className="max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              animi nesciunt voluptatibus minima? Necessitatibus et consequuntur
              nesciunt odit magni architecto sapiente recusandae, repellendus
              fuga sit. Voluptatum itaque suscipit pariatur non.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-8  right-100 sm:right-0  w-64 z-10">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div>
      <div className="absolute bottom-8 right-0 sm:left-0  w-64 z-10">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div> */}
    </div>
  );
}
