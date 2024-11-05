import { Fragment } from "react";
import PlaneImage from "../../assets/hero/pngegg.png";

const Hero = () => {
  return (
    <Fragment>
      <section className="flex flex-col items-center justify-center gap-y-10 py-20 px-10">
        {/* header section */}
        <div className="flex text-center">
          <p className="text-7xl font-bold">
            Create Ever-lasting <br /> <span className="text-5xl">Memories With Us</span>
          </p>
        </div>

        {/* image section */}
        <div className="flex flex-col items-center justify-center gap-y-10 py-20 px-10 relative">
          <div className="bg-customBg w-[800px] h-[300px] rounded-full"></div>
          <img
            src={PlaneImage}
            alt="plane image"
            className="absolute top-0 left-0 w-full h-full -translate-y-12"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
