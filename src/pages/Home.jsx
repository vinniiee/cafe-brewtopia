import { useEffect, useState } from "react";
import {
  BestSection,
  CategoriesSection,
  Header,
  Popular,
  ServicesSection,
  TestimonialSection,
} from "../components/landing-page";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 6000);
  });

  return (
    <div className=" w-screen flex flex-col justify-center items-center">
      <Header />
      {show && (
        <>
          {" "}
          <ServicesSection />
          <BestSection />
          <Popular />
          <CategoriesSection />
          <TestimonialSection />
        </>
      )}
    </div>
  );
}
