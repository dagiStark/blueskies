import { Fragment } from "react";
import { infoItems } from "@/constants";
import plane1 from "../../assets/info/plane1.jpg";
import plane2 from "../../assets/info/plane2.jpg";
import plane3 from "../../assets/info/plane3.jpg";

const Info = () => {
  return (
    <Fragment>
      <div className="flex flex-col px-3 sm:px-28 sm:mt-24 w-full">
        {/* upper section */}
        <section className="flex flex-col items-center justify-center gap-y-4 py-1 px-3 sm:px-10 text-center">
          <p className="text-xl text-gray-700">travel support</p>
          <p className="text-3xl font-bold">Plan Your Travel with confidence</p>
          <p className="text-xl text-gray-400">
            Find help with booking and travel plans, see what to expect along
            the journey
          </p>
        </section>
        {/* info section */}

        <section className="flex flex-col md:flex-row w-full gap-y-10 py-20 px-10">
          <div className="">
            {infoItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-4 py-4">
                <p
                  className={`font-bold text-lg ${
                    index === 0 && "bg-customBg"
                  } ${index === 1 && "bg-orange-500"}  ${
                    index === 2 && "bg-green-500"
                  } text-white w-10 h-10 rounded-full flex items-center justify-center `}
                >
                  {item.no}
                </p>
                <p className="font-bold text-xl">{item.title}</p>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            {/* First Image */}
            <div className="md:absolute  md:translate-y-40   transition-all duration-300 hover:scale-105">
              <img
                src={plane1}
                alt="plane image"
                className="w-44 h-72 sm:w-52 sm:h-80 rounded-full shadow-lg"
              />
            </div>

            {/* Second Image */}
            <div className="hidden md:block md:absolute md:translate-x-28 md:translate-y-80 -z-10  transition-all duration-300 hover:scale-105">
              <img
                src={plane2}
                alt="plane image"
                className="w-44 h-72 sm:w-52 sm:h-80 rounded-full shadow-lg"
              />
            </div>

            {/* Third Image */}
            <div className="md:absolute md:-translate-x-36 md:translate-y-60 transition-all duration-300 hover:scale-105">
              <img
                src={plane3}
                alt="plane image"
                className="w-44 h-72 sm:w-52 sm:h-80 rounded-full shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Info;
