import { Fragment } from "react";
import { Button } from "../ui/button";
import { supportItems } from "@/constants";

const Support = () => {
  return (
    <Fragment>
      {/* upper section */}
      <section>
        <div>
          <p>Travel to make memories all around the world</p>

          <div className="flex items-center justify-center">
            <Button className="bg-customBg px-10 rounded-full">View All</Button>
          </div>
        </div>
      </section>
      {/* lower section */}
      <section>
        <div>
          {supportItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-4 py-4">
              <item.icon className="text-gray-600" />
              <p className="font-bold text-xl">{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Support;
