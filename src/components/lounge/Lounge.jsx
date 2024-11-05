import { Fragment } from "react";
import { loungeItems } from "@/constants";
import plane1 from "../../assets/info/plane1.jpg";
import plane3 from "../../assets/info/plane3.jpg";

const Lounge = () => {
  return (
    <Fragment>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10 px-4 sm:px-10 md:px-20 lg:px-28">
        {/* Left section */}
        <section className="md:w-1/2">
          <div className="flex flex-col items-start justify-center space-y-6">
            <p className="text-3xl font-bold text-gray-800">
              Unaccompanied Minor Lounge
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {loungeItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <p className="font-semibold text-lg text-gray-700">
                    {item.title}
                  </p>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right section for images */}
        <section className="md:w-1/2 relative flex justify-center items-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Image 1 */}
            <div className="md:absolute md:translate-x-8 md:-translate-y-8  transition-transform duration-300 hover:scale-105">
              <img
                src={plane1}
                alt="plane1"
                className="w-40 h-60 md:w-44 md:h-72 rounded-full shadow-xl"
              />
            </div>
            {/* Image 3 */}
            <div className="md:absolute md:translate-x-32 md:translate-y-32 transition-transform duration-300 hover:scale-105">
              <img
                src={plane3}
                alt="plane3"
                className="w-40 h-60 md:w-44 md:h-72 rounded-full shadow-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Lounge;
