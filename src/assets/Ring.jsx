export default function Ring(props) {
  // eslint-disable-next-line react/prop-types
  const size = props.size || 370;
  // eslint-disable-next-line react/prop-types
  const { hover, label,direction,textColor } = props;

  return (
    <div className="relative ease-in-out ">
      <svg
        height={size}
        viewBox="0 0 370 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${hover?'scale-125':'scale-100 '} duration-500`}
        // className={`absolute top-2 ml-2  ${
        //   hover ?direction==='left'?"-left-8 scale-125": "left-24 scale-125" : direction==='left'?"left-8 scale-100": "left-5 scale-100"
        // }  duration-500`}
      >
        <circle cx="185" cy="185" r="175" stroke="white" strokeWidth="10" />
        <circle
          className={`${hover ? "opacity-100 " : "opacity-0"} duration-500  `}
          cx="185"
          cy="185"
          r="175"
          fill="white"
        />
      </svg>
      <p
        className={`absolute text-center text-2xl left-1/2 text-${textColor||'night'} ${
          hover ? "opacity-100 top-1/2 left-1/2" : `opacity-0  top-1/2 ${direction==='left'?'-left-1/2':'left-full'}`
        } duration-500  leading-tight   -translate-y-1/2 -translate-x-1/2  text-lg tracking-tight uppercase font-medium`}
      >
        {label}
      </p>
    </div>
  );
}
