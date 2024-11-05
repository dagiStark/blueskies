import { Fragment } from "react";
import { travelersItems } from "@/constants";

const Travelers = () => {
  return (
    <Fragment>
      <section>
        <div>
          <p>Top travelers of this month</p>
        </div>

        <div>
          <div>
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
