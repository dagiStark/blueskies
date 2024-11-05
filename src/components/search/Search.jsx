import { Fragment } from "react";
import { searchItems } from "@/constants";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Search = () => {
  return (
    <Fragment>
      {/* filter section */}
      <section className="flex flex-col items-center justify-center gap-y-10 py-20 px-10">
        <div className="flex items-center justify-between gap-x-10 py-4 px-24 rounded-full w-1/2 bg-black/10 text-gray-600">
          <p>Economy</p>
          <p>Business Class</p>
          <p>First Class</p>
        </div>
      </section>

      {/* search section */}
      <section className="flex items-center justify-center gap-x-24">
        <div className="flex items-center gap-x-16">
          {searchItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-x-2 "
            >
              <item.icon className="text-gray-600" />
              <div className="flex flex-col">
                <p className="font-bold text-lg">{item.name}</p>
                <Input placeholder={item.placeholder} className=" h-[20px]" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Button  className="bg-customBg px-10 rounded-full">Search Flight</Button>
        </div>
      </section>
    </Fragment>
  );
};

export default Search;
