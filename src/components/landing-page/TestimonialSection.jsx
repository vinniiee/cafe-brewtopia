import Quotes from "../../assets/Quotes";
import testimonials from "../../data/testimonials";
import Carousel from "../../ui/Carousel";
import Testimonial from "../Testimonial";

export default function TestimonialSection() {
  const carouselItems = testimonials.map((item) => (
    <Testimonial key={item.author} text={item.text} author={item.author} />
  ));

  return (
    <div className="py-64">
      <div className="relative flex flex-col md:flex-row justify-center items-center space-x-16 p-16 py-32">
        <div className="relative z-20 flex flex-col md:w-1/2 space-y-8 justify-center items-center text-white text-left font-primary">
          <h1 className="text-7xl ">
            Our Customer{" "}
            <span className="text-night font-semibold">Loves Us</span>.
          </h1>
          <p className="  sm:text-xl tracking-wide font-light ">
            We take great pride in curating an experience that transcends the
            ordinary. Nestled in the heart of the community, we strive to be
            more than just a place to grab a coffee or a bite to eat. Our goal
            is to create a haven, a welcoming space where cherished moments
            happen and friendships blossom. The coffee, meticulously sourced and
            brewed, is a testament to our dedication to quality. Our menu,
            spanning from delectable pastries to sumptuous dinner options,
            reflects our commitment to offering a diverse culinary journey. We
            invite you to savor, linger, and make this cafe your home away from
            home, its where every cup and plate tells a story.{" "}
          </p>
          <div className="drop-shadow-[10px_10px_2px_rgba(0,0,0,.5)]">
            <img src="/arrow.svg" />
          </div>
        </div>
        <div className="absolute fill-dark-coffee-2 top-48 right-32 h-32 sm:h-64 z-10 flex flex-col justify-center -mt-32 items-center">
          <Quotes className="h-full w-full drop-shadow-[10px_10px_2px_rgba(0,0,0,.5)]" />
        </div>
      </div>
      
      <Carousel>
        {carouselItems}
      </Carousel>
    </div>
  );
}
