import { Fragment } from "react";
import { infoItems } from "@/constants";
import plane1 from "../../assets/info/plane1.jpg";
import plane2 from "../../assets/info/plane2.jpg";
import plane3 from "../../assets/info/plane3.jpg";

const Info = () => {
  return (
    <Fragment>
      {/* upper section */}
      <section className="flex flex-col items-center justify-center gap-y-4 py-1 px-10">
        <p className="text-xl text-gray-700">travel support</p>
        <p className="text-3xl font-bold">Plan Your Travel with confidence</p>
        <p className="text-xl text-gray-400">
          Find help with booking and travel plans, see what to expect along the
          journey
        </p>
      </section>
      {/* info section */}

      <section className="flex w-full gap-y-10 py-20 px-10">
        <div className="w-1/2">
          {infoItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4 py-4">
              <p
                className={`font-bold text-lg ${index === 0 && "bg-customBg"} ${
                  index === 1 && "bg-orange-500"
                }  ${
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
          <div className="absolute translate-x-40 translate-y-40  opacity-90 transition-all duration-300 hover:scale-105">
            <img
              src={plane1}
              alt="plane image"
              className="w-44 h-72 rounded-full shadow-lg"
            />
          </div>

          {/* Second Image */}
          <div className="absolute translate-x-0 translate-y-60  opacity-95 transition-all duration-300 hover:scale-105">
            <img
              src={plane2}
              alt="plane image"
              className="w-48 h-76 rounded-full shadow-lg"
            />
          </div>

          {/* Third Image */}
          <div className="absolute translate-x-60 translate-y-60 opacity-90 transition-all duration-300 hover:scale-105">
            <img
              src={plane3}
              alt="plane image"
              className="w-44 h-72 rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Info;
