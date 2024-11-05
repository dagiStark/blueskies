import {
  Calendar,
  MapPin,
  UserIcon,
  NotepadText,
  ShieldCheck,
  BookmarkPlus,
} from "lucide-react";

import Travel1 from "../assets/travelers/travel1.jpg";
import Travel2 from "../assets/travelers/travel2.jpg";
import Travel3 from "../assets/travelers/travel3.jpg";
import Travel4 from "../assets/travelers/travel4.jpg";

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

export const infoItems = [
  {
    no: "01",
    title: "Travel Requirements for Dubai",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil ipsum qui similique, esse aperiam.",
  },
  {
    no: "02",
    title: "Chauffeur services at your arrival",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil ipsum qui similique, esse aperiam.",
  },
  {
    no: "03",
    title: "Multi-risk travel insurance",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil ipsum qui similique, esse aperiam.",
  },
];

export const supportItems = [
  {
    title: "Book & Relax",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    icon: NotepadText,
  },
  {
    title: "Smart Checklist",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
    icon: ShieldCheck,
  },
  {
    title: "Save More",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    icon: BookmarkPlus,
  },
];

export const loungeItems = [
  {
    title: "Help through the airport",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil ipsum qui similique, esse aperiam.",
  },
  {
    title: "Priority Boarding",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil ipsum qui similique, esse aperiam.",
  },
  {
    title: "Core on the flight",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil ipsum qui similique, esse aperiam.",
  },
  {
    title: "Chauffeur-drive services",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nihil ipsum qui similique, esse aperiam.",
  },
];

export const travelersItems = [
  {
    name: "Mike Ross",
    placeholder: "Add guests",
    img: Travel1,
  },
  {
    name: "Lisa Smith",
    placeholder: "Add date",
    img: Travel2,
  },
  {
    name: "Harvey Specter",
    placeholder: "Add date",
    img: Travel3,
  },
  {
    name: "Jessica Pearson",
    placeholder: "Add date",
    img: Travel4,
  },
];

export const footerLinks = [
  {
    name: "Information",
    links: [
      {
        label: "Home",
        href: '#'
      },
      {
        label: "Explore",
        href: '#'
      },
      {
        label: "Flight Status",
        href: '#'
      },
      {
        label: "Travel",
        href: '#'
      },
      {
        label: "Check-in",
        href: '#'
      },
      {
        label: "Manage your booking",
        href: '#'
      },
    ]
  },
  {
    name: "Quick Guide",
    links: [
      {
        label: "FAQ",
        href: '#'
      },
      {
        label: "How to",
        href: '#'
      },
      {
        label: "Features",
        href: '#'
      },
      {
        label: "Baggage",
        href: '#'
      },
      {
        label: "Route Map",
        href: '#'
      },
      {
        label: "Our Communities",
        href: '#'
      },
    ]
  },
  {
    name: "Additional Info.",
    links: [
      {
        label: "Chaulfuer",
        href: '#'
      },
      {
        label: "Our Partners",
        href: '#'
      },
      {
        label: "Destination",
        href: '#'
      },
      {
        label: "Careers",
        href: '#'
      },
      {
        label: "Transportation",
        href: '#'
      },
      {
        label: "Program Rules",
        href: '#'
      },
    ]
  },
];
