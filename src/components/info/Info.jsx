import { Fragment } from "react";
import { infoItems } from "@/constants";
import plane1 from "../../assets/info/plane1.jpg";
import plane2 from "../../assets/info/plane2.jpg";
import plane3 from "../../assets/info/plane3.jpg";

const Info = () => {
  return (
    <Fragment>
      {/* upper section */}
      <section>
        <p>travel support</p>
        <p>Plan Your Travel with confidence</p>
        <p>
          Find help with booking and travel plans, see what to expect along the
          journey
        </p>
      </section>
      {/* info section */}

      <section className="flex flex-col gap-y-10 py-20 px-10">
        <div>
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

        <div>
          <div>
            <img src={plane1} alt="plane image" />
          </div>
          <div>
            <img src={plane2} alt="plane image" />
          </div>
          <div>
            <img src={plane3} alt="plane image" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Info;
