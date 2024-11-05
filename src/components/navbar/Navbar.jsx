import { Fragment } from "react";
import FlightIcon from "../../assets/taking-off.png";
import { MessageCircleQuestion, Globe, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { navItems } from "@/constants";

const Navbar = () => {
  return (
    <Fragment>
      <header className="bg-slate-200 text-gray-600 overflow-hidden">
        {/* upper section */}
        <div className="flex justify-between items-center px-8 py-2 ">
          <div>
            <img
              src={FlightIcon}
              alt="flight icon"
              className="w-12 h-12 hidden md:flex"
            />
            <p className="block md:hidden font-bold text-3xl text-black ">
              Blue Skies
            </p>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-2">
              <MessageCircleQuestion />
              <p>Support</p>
            </div>
            <div className="flex gap-2">
              <Globe />
              <p>Language</p>
            </div>
            <MenuIcon className="flex md:hidden" />
          </div>

          <div className="md:flex gap-2 hidden">
            <Button className="">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* lower section */}
        <div className=" items-center justify-between hidden md:flex bg-white/50 px-8 py-2">
          <div>
            <p className="font-bold text-3xl text-black ">Blue Skies</p>
          </div>

          <div className="flex items-center justify-between gap-x-44  md:gap-x-48 lg:gap-x-60">
            <div className="flex items-center justify-center">
              <menu className="flex items-center justify-between gap-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </menu>
            </div>

            <div>
              <Button className="bg-customBg">Contact</Button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
