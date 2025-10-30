import Quotes from "../assets/Quotes";

export default function Testimonial(props) {
  // eslint-disable-next-line react/prop-types
  const { text, author } = props;
  return (
    <div
      className="relative min-w-[300px] sm:min-w-[500px] md:min-w-[350px] lg:min-w-[600px] z-20   bg-white 
    leading-tight text-center font-primary md:text-xl text-night
    p-12 py-16 rounded drop-shadow-[20px_20px_5px_rgba(0,0,0,.5)] mx-8 md:mx-16"
    >
      <div className="absolute fill-night top-0 right-4 sm:right-8  -ml-8 sm:h-32 h-16 -mt-8 sm:-mt-16   z-10 flex flex-col justify-center  items-center">
        <Quotes />
      </div>
      <p className="text-md">{text}</p>
      <p className="  absolute right-8 bottom-6">- {author}</p>
    </div>
  );
}
