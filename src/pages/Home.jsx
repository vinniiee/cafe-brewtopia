import {
  BestSection,
  CategoriesSection,
  Header,
  Popular,
  ServicesSection,
  TestimonialSection,
} from "../components/landing-page";

export default function Home() {
  return (
    <div className=" w-screen flex flex-col justify-center items-center">
      <Header />
      <ServicesSection />
      <BestSection />
      <Popular/>
      <CategoriesSection />
      <TestimonialSection/>
    </div>
  )
}
