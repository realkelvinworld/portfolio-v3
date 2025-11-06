import {
  AddressBookIcon,
  CodeIcon,
  NotchesIcon,
  PersonIcon,
  QuestionIcon,
} from "@phosphor-icons/react";

export const routes = {
  me: "/me",
  about: "/about",
  mywork: "/my-work",
  skills: "/skills",
  contact: "/contact",
};

export const menuItems = [
  {
    title: "Me",
    icon: <PersonIcon />,
    route: routes.me,
  },
  {
    title: "About Me",
    icon: <QuestionIcon />,
    route: routes.about,
  },
  {
    title: "Skills",
    icon: <CodeIcon />,
    route: routes.skills,
  },
  {
    title: "My work",
    icon: <NotchesIcon />,
    route: routes.mywork,
  },
  {
    title: "Contact",
    icon: <AddressBookIcon />,
    route: routes.contact,
  },
];
