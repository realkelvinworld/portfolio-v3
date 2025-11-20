import Contact from "@/components/views/contact";
import Mywork from "@/components/views/my-work";
import Skills from "@/components/views/skills";
import About from "@/components/views/about";
import Me from "@/components/views/me";
import {
  AddressBookIcon,
  CodeIcon,
  NotchesIcon,
  PersonIcon,
  QuestionIcon,
} from "@phosphor-icons/react";

export const routes = {
  portfolio: "/portfolio",
  about: "/about",
  mywork: "/my-work",
  skills: "/skills",
  contact: "/contact",
};

export const menuItems = [
  {
    title: "Me",
    slug: "me",
    icon: <PersonIcon weight="bold" />,
    route: () => <Me />,
  },
  {
    title: "About Me",
    slug: "about",
    icon: <QuestionIcon weight="bold" />,
    route: () => <About />,
  },
  {
    title: "My work",
    slug: "works",
    icon: <NotchesIcon weight="bold" />,
    route: () => <Mywork />,
  },
  {
    title: "Contact",
    slug: "contact",
    icon: <AddressBookIcon weight="bold" />,
    route: () => <Contact />,
  },
];
