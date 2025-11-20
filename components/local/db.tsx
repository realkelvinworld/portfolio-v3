import {
  Buildaf,
  Comms360,
  Dieters,
  Metric,
  Passport,
  ZediWork,
} from "@/public/images";

export const Works = [
  {
    id: 1,
    slug: "zedi",
    title: "Zedi",

    role: "Lead Front End Engineer and UI/UX",
    subTitle: "Crypto to fiat platform",
    description:
      "Zedi is a mobile app that makes managing crypto and Cedis easy. Convert any supported cryptocurrency to Cedis, pay bills, and send money all in one simple app.",
    link: "https://zedi.app",

    images: {
      src: ZediWork,
      alt: "Zedi app",
    },

    tags: ["#Nextjs", "#Tailwindcss", "#Typescript", "#Framer Motion"],
  },
  {
    id: 2,
    slug: "metric",
    title: "Metric",
    role: "Front End Engineer",
    subTitle: "Identity Verification Software",
    description:
      "Metric Identity is a SaaS-based facial verification technology that enables organisations to streamline KYC requirements, and prevent fraud in real-time.",
    link: "https://auth.metric.africa/",

    images: {
      src: Metric,
      alt: "metric",
    },

    tags: ["#Nextjs", "#Tailwindcss", "#Typescript", "#Framer Motion"],
  },
  {
    id: 3,
    slug: "comms-360",
    title: "COMMS360",
    role: "Front End Engineer",
    subTitle: "Communication as a service platform",
    description:
      "COMMS360 is a multi-channel communications platform designed to streamline messaging, event management, contact organization, and reporting in one centralized hub.",
    link: "https://comms360.africa/auth/login",

    images: {
      src: Comms360,
      alt: "Zedi app",
    },

    tags: ["#Nextjs", "#Tailwindcss", "#Typescript", "#Framer Motion"],
  },
  {
    id: 4,
    slug: "dieters",
    title: "Dieters Foods",

    role: "Lead Front End Engineer and UI/UX",
    subTitle: "Nutrition on the go",
    description:
      "Dieters Foods is a health-focused snack company providing delicious, guilt-free snacks made from real ingredients. Their e-commerce website allows customers to easily browse and purchase products online, while the admin section helps efficiently manage orders and inventory for seamless business operations",
    link: "https://dietersfoods.com",

    images: {
      src: Dieters,
      alt: "Dieters app interface showing meal planning feature",
    },

    tags: [
      "#Nextjs",
      "#Tailwindcss",
      "#Typescript",
      "#Framer Motion",
      "#Supabase",
    ],
  },
  {
    id: 5,
    slug: "ghana-passport",
    title: "Ghana passport delivery & management",
    role: "Lead Front End Engineer",
    subTitle: "Passport delivery & management",
    description:
      "The Ghana Passport Delivery & Management System streamlines the passport application and delivery process with secure document handling, real-time tracking, and efficient customer support making it easier for citizens to get their passports.",
    link: "https://app.ghanapassportdelivery.com",

    images: {
      src: Passport,
      alt: "Ghana passport application interface",
    },

    tags: ["#Nextjs", "#Tailwindcss", "#Typescript", "#Framer Motion", "#SCSS"],
  },
  {
    id: 6,
    slug: "buildafestate",
    title: "Buildaf Estate",
    subTitle: "A leading Real Estate developer in Ghana",
    description:
      "Buildaf Estates is a leading real estate developer in Ghana, focused on quality and customer satisfaction. This platform showcases their properties with a clean, user-friendly experience that reflects their commitment to excellence.",
    link: "https://buildafghana.com",

    images: {
      src: Buildaf,
      alt: "Buildaf Estates property exterior view",
    },
    role: "Lead Front End Engineer",
    tags: ["#Wordpress"],
  },

  //   {
  //     id: 5,
  //     slug: "beyond-scenes",
  //     title: "Beyond Scenes",
  //     subTitle: "Portfolio for a rising digital creative",
  //     description:
  //       "Richman is a self-taught photographer from Adenta, born in 2001. Despite having no artistic family background or formal training, he developed his skills independently and works as a freelance photographer. His online portfolio showcases his visual storytelling work and helps him connect with clients and collaborators.",
  //     link: "https://beyond-scences.vercel.app/",

  //     images: {
  //       src: BeyondScenes,
  //       alt: "Beyond Scenes portfolio interface",
  //     },

  //     tags: ["#Nextjs", "#Tailwindcss", "#Typescript", "#Framer Motion", "#SCSS"],
  //   },
];
