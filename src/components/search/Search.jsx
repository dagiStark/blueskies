import { Fragment } from "react";
import { searchItems } from "@/constants";
import { Button } from "../ui/button";

const Search = () => {
  return (
    <Fragment>
      <div className="mb-10" data-aos="fade-up">
        {/* filter section */}
        <section className="flex flex-col items-center justify-center gap-y-10 py-1 px-10">
          <div className=" sm:flex items-center justify-center rounded-full  sm:bg-black/10 text-gray-600">
            <p className="hover:bg-customBg/60 duration-500 hover:text-white px-6 py-1 sm:px-10 sm:py-2 rounded-full hover:scale-110">
              Economy
            </p>
            <p className="hover:bg-customBg/60 duration-500 hover:text-white px-6 py-1 sm:px-10 sm:py-2 rounded-full hover:scale-110">
              Business Class
            </p>
            <p className="hover:bg-customBg/60 duration-500 hover:text-white px-6 py-1 sm:px-10 sm:py-2 rounded-full hover:scale-110">
              First Class
            </p>
          </div>
        </section>

        {/* search section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-x-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-16">
            {searchItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-x-2 "
              >
                <item.icon className="text-gray-600" />
                <div className="flex flex-col gap-y-2">
                  <p className="font-bold text-lg">{item.name}</p>
                  <input
                    placeholder={item.placeholder}
                    type="search"
                    className=" h-[20px] w-[100px] focus:outline-none focus:ring-0 focus:border-yellow-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Button className="bg-customBg px-10 rounded-full">
              Search Flight
            </Button>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Search;
