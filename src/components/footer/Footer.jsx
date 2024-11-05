import { Fragment } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <Fragment>
      <div>
        <section>
          <div>
            <p>Subscribe Newsletter & Get Updates</p>
          </div>
          <div>
            <Input />
            <Button>Subscribe</Button>
          </div>
        </section>


        <section></section>
      </div>
    </Fragment>
  );
};

export default Footer;
