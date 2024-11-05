import { Fragment } from "react";
import { travelersItems } from "@/constants";

const Travelers = () => {
  return (
    <Fragment>
      <section className="flex flex-col items-center justify-center gap-y-4 py-10 px-4 mt-28">
        <div>
          <p className="text-4xl font-bold text-gray-700">
            Top travelers of this month
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4">
            {travelersItems.map((traveler, index) => {
              return (
                <div key={index} className="flex gap-x-4 items-center">
                  <div>
                    <p>{traveler.name}</p>
                    <p>{traveler.placeholder}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Travelers;
