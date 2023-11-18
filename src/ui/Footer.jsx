export default function Footer() {
  const connectLogoClasses = `w-[16px] md:min-w-[32px]`;
  const footerHeading = `lg:text-3xl   text-lg sm:text-2xl font-primary text-white`;

  return (
    <div className="bg-night w-screen overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-around items-center space-x-8 text-center  text-white p-16 font-primary text-xs md:text-lg tracking-wide font-light">
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:self-start text-left space-y-2 md:space-y-4 sm:w-1/2  md:w-1/2 ">
          <div className="h-full">
            <img className="w-full h-full " src="/named-logo.svg" />
          </div>

          <p className="inline-block">
            A haven for coffee enthusiasts, offering a symphony of meticulously
            crafted brews. From rich espressos to indulgent lattes, each sip is
            an experience in our cozy oasis.
          </p>
        </div>
        <div className="flex flex-col  lg:flex-row space-y-4 lg:space-y-0 justify-center items-center md:space-y-8 lg:items-start mt-10">
          <div className="flex flex-col justify-center space-y-2 lg:space-y-4 items-center p-0">
            <h1 className={footerHeading}>Quick Links</h1>
            <div className="flex lg:flex-col justify-center space-x-2 lg:space-x-0 items-center lg:space-y-2">
              <p>Home</p>
              <p>Menu</p>
              <p>About Us</p>
              <p>Conatct</p>
            </div>
          </div>
          <div className="flex flex-col justify-center  items-center space-y-4 lg:ml-16 ">
            <h1 className={footerHeading}>Connect with us</h1>
            <div className="flex justify-center items-center space-x-2 sm:space-x-4 lg:space-x-8 ">
              <div className={connectLogoClasses}>
                <img
                  className="w-full h-full"
                  src="/social/fb.svg"
                  alt="fb-logo"
                />
              </div>
              <div className={connectLogoClasses}>
                <img
                  className="w-full h-full"
                  src="/social/x.svg"
                  alt="x-logo"
                />
              </div>
              <div className={connectLogoClasses}>
                <img
                  className="w-full h-full"
                  src="/social/insta.svg"
                  alt="insta-logo"
                />
              </div>
              <div className={connectLogoClasses}>
                <img
                  className="w-full h-full"
                  src="/social/linkedin.svg"
                  alt="linkedin-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
