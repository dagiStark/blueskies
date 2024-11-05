import { Fragment } from "react";
import { loungeItems } from "@/constants";
import plane1 from "../../assets/info/plane1.jpg";
import plane2 from "../../assets/info/plane2.jpg";
import plane3 from "../../assets/info/plane3.jpg";

const Lounge = () => {
  return (
    <Fragment>
      <div className="">
        {/* left section */}

        <section>
          <div>
            <p>Unaccompanied Minor Lounge</p>
            <div>
              {loungeItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-y-4 py-4">
                  <p className="font-bold text-lg">{item.title}</p>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ri section */}
        <section className="">
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
      </div>
    </Fragment>
  );
};

export default Lounge;
