import { Fragment } from "react";
import PlaneImage from "../../assets/hero/pngegg.png";

const Hero = () => {
  return (
    <Fragment>
      <section className="flex flex-col items-center justify-center  py-20 px-10 overflow-hidden">
        {/* header section */}
        <div className="flex text-center">
          <p className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Create Ever-lasting <br />{" "}
            <span className="text-3xl md:text-4xl lg:text-5xl">
              Memories With Us
            </span>
          </p>
        </div>

        {/* image section */}
        <div className="flex flex-col items-center justify-center gap-y-10 sm:py-20 px-10 relative sm: md: lg:">
          <div className="bg-customBg  sm:w-[500px] sm:h-[150px] md:w-[700px] md:h-[200px] lg:w-[800px] lg:h-[300px] rounded-full"></div>
          <img
            src={PlaneImage}
            alt="plane image"
            className=" sm:absolute top-0 left-0 -translate-y-0 md:-translate-y-8 lg:-translate-y-12 sm:w-[500px]  md:w-[700px] lg:w-full lg:h-full"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
