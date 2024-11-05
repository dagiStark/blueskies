import { Fragment } from "react";
import { Button } from "../ui/button";
import { supportItems } from "@/constants";

const Support = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center bg-black/5 py-20">
        {/* upper section */}
        <section>
          <div className="flex flex-col md:flex-row items-center justify-between gap-x-24 gap-y-4">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 md:w-[500px] text-center">
              Travel to make memories all around the world
            </p>
            <div className="flex items-center justify-center">
              <Button className="bg-customBg px-10 rounded-full">
                View All
              </Button>
            </div>
          </div>
        </section>

        {/* lower section */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:flex items-center justify-center mt-10 gap-x-5 gap-y-2">
            {supportItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-y-4 py-4 bg-white w-[250px] h-[300px] items-center justify-center text-center rounded-full `}
              >
                <item.icon
                  className={`text-gray-600 ${
                    index === 0 && "bg-customBg/70"
                  } ${index === 1 && "bg-orange-400/70"} ${
                    index === 2 && "bg-green-500/70"
                  } rounded-full text-white p-2 w-10 h-10`}
                />
                <p className="font-bold text-xl">{item.title}</p>
                <p className="text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Support;
