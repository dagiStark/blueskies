import { Fragment } from "react";
import FlightIcon from "../../assets/taking-off.png";
import { MessageCircleQuestion, Globe } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <Fragment>
      <header className="bg-slate-200 text-gray-600">
        {/* upper section */}
        <div className="flex justify-between items-center px-8 py-2 ">
          <div>
            <img src={FlightIcon} alt="flight icon" className="w-12 h-12" />
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
          </div>

          <div className="sm:flex gap-2 hidden">
            <Button className="">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* lower section */}
        <div>
          <div></div>
          <div></div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
