import { Fragment } from "react";
import { Button } from "../ui/button";

const Lounge = () => {
  return (
    <Fragment>
      {/* upper section */}
      <section>
        <div>
          <p>Lounge</p>

          <div className="flex items-center justify-center">
            <Button className="bg-customBg px-10 rounded-full">
              Search Flight
            </Button>
          </div>
        </div>
      </section>
      {/* lower section */}
      <section>
        
      </section>
    </Fragment>
  );
};

export default Lounge;
