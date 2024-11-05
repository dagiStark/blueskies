import { Button } from "../ui/button";
import { footerLinks } from "@/constants";
import PlaneLogo from "../../assets/taking-off.png";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black/5">
        <section className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 flex flex-col md:items-center md:justify-between md:space-y-0 md:gap-4">
          {/* Title */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Subscribe to Newsletter & Get Updates
            </p>
          </div>

          {/* Input and Button */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-96 p-3 rounded-full border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <Button className="bg-customBg text-white px-10 py-3 rounded-full shadow-md hover:bg-primary transition-all duration-200">
              Search Flight
            </Button>
          </div>
        </section>

        <section>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-y-4 py-10 px-4 mt-28">
            <div>
              <div>
                <img src={PlaneLogo} alt="plane logo" />
              </div>
              <p>your mind should be stronger than your feelings</p>
              <div>
                <Facebook />
                <Twitter />
                <Youtube />
                <Linkedin />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-10 gap-y-4">
                {footerLinks.map((item, index) => (
                  <div key={index}>
                    <p>{item.name}</p>
                    {item.links.map((link, index) => (
                      <div key={index}>
                        <a href={link.href}>{link.label}</a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
