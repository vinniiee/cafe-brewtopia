import { createSearchParams, useNavigate } from "react-router-dom";
import Beans from "../../assets/Beans";
import CircleRing from "../../assets/CircleRing";
import { motion } from "framer-motion";

export default function CategoriesSection() {
  const navigate = useNavigate();
  return (
    <div className="relative w-screen py-64">
      <div className="relative flex flex-col bg-blend-darken justify-center items-center py-32 px-4 w-full h-full z-20">
        <motion.h2
          viewport={{ once: true }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl sm:text-7xl text-center capitalize text-white tracking-wide font-primary"
        >
          What is <span className="text-night font-semibold">your mood</span>?
        </motion.h2>
        <div className="grid md:grid-cols-8 grid-cols-4 md:grid-rows-2 grid-rows-3 gap-2 md:gap-4   py-20 ">
          <div
            className={
              "row-start-1 col-start-1 md:col-start-2 col-span-2 cursor-pointer"
            }
            onClick={() =>
              navigate({
                pathname: "menu",
                search: createSearchParams({
                  filterBy: "espresso",
                }).toString(),
              })
            }
          >
            <CircleRing label={"Espresso"} />
          </div>
          <div
            className={
              "row-start-1 col-start-3 md:col-start-4 col-span-2 cursor-pointer"
            }
            onClick={() =>
              navigate({
                pathname: "menu",
                search: createSearchParams({
                  filterBy: "cappuccino",
                }).toString(),
              })
            }
          >
            <CircleRing label={"Cappuccino"} />
          </div>{" "}
          <div
            className={
              "md:row-start-1 col-start-1 row-start-2 md:col-start-6 col-span-2 cursor-pointer"
            }
            onClick={() =>
              navigate({
                pathname: "menu",
                search: createSearchParams({
                  filterBy: "latte",
                }).toString(),
              })
            }
          >
            <CircleRing label={"Caffè Latte"} />
          </div>
          <div
            className={`row-start-2 col-start-3  md:col-start-3 col-span-2 cursor-pointer`}
            onClick={() =>
              navigate({
                pathname: "menu",
                search: createSearchParams({
                  filterBy: "iced brew",
                }).toString(),
              })
            }
          >
            <CircleRing label={"Cold Brew"} />
          </div>
          <div
            className={
              "md:row-start-2 col-start-2 row-start-3 md:col-start-5 col-span-2 cursor-pointer"
            }
            onClick={() =>
              navigate({
                pathname: "menu",
                search: createSearchParams({
                  filterBy: "mocha",
                }).toString(),
              })
            }
          >
            <CircleRing label={"Caffè Mocha"} />
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-0    w-64 z-10">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div>
      <div className="absolute bottom-10 right-0  w-64 z-100">
        <Beans className="w-full" size={200} color={"dark-coffee-2"} />
      </div>
    </div>
  );
}
