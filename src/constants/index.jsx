import { Calendar, MapPin, UserIcon } from "lucide-react";

export const navItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Offers",
    href: "#",
  },
  {
    name: "Flights",
    href: "#",
  },
];

export const searchItems = [
  {
    name: "Location",
    placeholder: "where do you want to go",
    icon: MapPin,
  },
  {
    name: "Travelers",
    placeholder: "Add guests",
    icon: UserIcon,
  },
  {
    name: "Check In",
    placeholder: "Add date",
    icon: Calendar,
  },
  {
    name: "Check Out",
    placeholder: "Add date",
    icon: Calendar,
  },
];
