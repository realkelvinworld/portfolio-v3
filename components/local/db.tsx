import { Buildaf, Dieters, Passport, ZediWork } from "@/public/images";

export const Works = [
  {
    id: 1,
    slug: "zedi",
    title: "Zedi",

    role: "Lead Front End Engineer and UI/UX Designer",
    subTitle: "Money Transfer App",
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
    slug: "dieters",
    title: "Dieters Foods",

    role: "Lead Front End Engineer and UI/UX Designer",
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
    id: 4,
    slug: "ghana-passport",
    title: "Ghana passport delivery & management",
    subTitle: "Passport delivery & management",
    description:
      "The Ghana Passport Delivery & Management System is designed to streamline the application and delivery process for Ghanaian passports. This platform ensures secure document handling, real-time application tracking, and efficient customer support, making it easier for citizens to obtain their passports.",
    link: "https://app.ghanapassportdelivery.com",

    images: {
      src: Passport,
      alt: "Ghana passport application interface",
    },

    tags: ["#Nextjs", "#Tailwindcss", "#Typescript", "#Framer Motion", "#SCSS"],
  },
  {
    id: 3,
    slug: "buildafestate",
    title: "Buildaf Estate",
    subTitle: "A leading Real Estate developer in Ghana",
    description:
      "Buildaf Estates is a top real estate developer in Ghana, committed to quality and customer satisfaction. This project highlights their vision of setting new standards in luxury living.I designed this platform to showcase their properties with a seamless, user-friendly experience, reflecting their dedication to excellence.",
    link: "https://buildafghana.com",

    images: {
      src: Buildaf,
      alt: "Buildaf Estates property exterior view",
    },

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
