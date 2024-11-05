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
      <section>
        <div>
          {searchItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-x-10 py-4 px-24 rounded-full w-1/2 bg-black/10 text-gray-600"
            >
              <p>{item.name}</p>
              <Input placeholder={item.placeholder} />
              <item.icon />
            </div>
          ))}
        </div>

        <div>
          <Button className="bg-customBg">Search Flight</Button>
        </div>
      </section>
    </Fragment>
  );
};

export default Search;
