import Logo from "../assets/Logo";

export default function HeaderLogo() {
  let variants = {
    initial: {
      x: "calc(50vw)",
      y: "calc(50vh)",
    },
    animate: {
      x: [
        "calc(50vw - .5*var(--logo-size))",
        "calc(50vw - .5*var(--logo-size))",
        "calc(0vw - -.5*var(--logo-size))",
      ],
      y: [
        "calc(50vh - .5*var(--logo-size))",
        "calc(50vh - .5*var(--logo-size))",
        "calc(0vh - -.5*var(--logo-size))",
      ],
      scale: [1, 2.5, 1],
    },
  };
  

  const logoSize = 125;
  return (
    <Logo
      variants={variants}
      initial="initial"
      animate="animate"
      size={logoSize}
      className={`absolute h-[80px] sm:h-[125px] 
       
       
       [--logo-size:80px] sm:[--logo-size:125px]
        `}
      transition={{
        duration: 3,
      }}
      style={{  zIndex: "1000" }}
    />
  );
}
