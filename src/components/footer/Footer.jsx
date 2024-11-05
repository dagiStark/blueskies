import { Button } from "../ui/button";
import { footerLinks } from "@/constants";
import PlaneLogo from "../../assets/taking-off.png";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black/5 sm:mt-10">
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

        <section className="bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-12 mt-28 rounded-lg shadow-lg">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            {/* Left Section */}
            <div className="text-center md:text-left space-y-4">
              {/* Logo */}
              <div>
                <img
                  src={PlaneLogo}
                  alt="plane logo"
                  className="mx-auto md:mx-0 w-24 h-24"
                  loading="lazy"
                />
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">
                Your mind should be stronger than your feelings
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <Facebook className="text-blue-600 hover:opacity-80 transition duration-200" />
                <Twitter className="text-blue-400 hover:opacity-80 transition duration-200" />
                <Youtube className="text-red-600 hover:opacity-80 transition duration-200" />
                <Linkedin className="text-blue-800 hover:opacity-80 transition duration-200" />
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300 text-center md:text-left">
              {footerLinks.map((item, index) => (
                <div key={index} className="space-y-2">
                  <p className="font-bold text-gray-800 dark:text-gray-200">
                    {item.name}
                  </p>
                  {item.links.map((link, index) => (
                    <div key={index}>
                      <a
                        href={link.href}
                        className="hover:text-primary dark:hover:text-primary-light transition duration-150"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <p className="items-center text-center py-3 font-mono">Copyright © 2023 Blue Skies. All rights reserved.</p>
    </footer>
  );
};

export default Footer;